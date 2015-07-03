class User < ActiveRecord::Base
  has_many :news_items, dependent: :destroy
  has_many :comments, through: :news_items
  has_many :replies, through: :comments

  def self.find_or_create_from_auth_hash(auth_hash)
    user = self.where(provider: auth_hash.provider, uid: auth_hash.uid).first_or_create
    user.update(
      name: auth_hash.info.name,
      profile_thumbnail: auth_hash.info.image,
      profile_picture: auth_hash.info.image.gsub("_normal", ""),
      token: auth_hash.credentials.token,
      secret: auth_hash.credentials.secret
    )
    user
  end

  # def self.get_original_picture_size(picture_url)
  #   url_split_point = picture_url.rindex("_normal") - 1
  #   url_beginning = picture_url.slice!(0..url_split_point)
  #   url_end = picture_url.remove(url_beginning)
  #   url_end.gsub!("_normal", "")
  #   url_beginning + url_end
  # end

end
