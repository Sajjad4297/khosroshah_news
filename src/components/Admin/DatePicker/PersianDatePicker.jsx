import React from "react"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"

export default function Example({value,onChange}) {
  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      value={value}
      onChange={onChange}
      placeholder="تاریخ..."
      
    />
  )
}
