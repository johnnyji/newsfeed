module NewsItemsHelper

  def format_date(date)
    date.strftime("%b %d %Y")
  end

  def format_timestamp(date)
    date.strftime("%Y %m %e %H %M %S").delete(" ").to_i
  end

end
