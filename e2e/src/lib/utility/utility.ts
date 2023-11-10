import { Page } from "@playwright/test";
import moment from "moment";


export class DateTimeUtility {
  readonly page: Page;
  constructor (page: Page)   {
    this.page = page;
  }

  convertDateFormat (date: string) {
    const inputDateString = date;

    // Parse the input date string using moment
    const inputDate = moment(inputDateString, "DD/MM/YYYY");

    // Format the date as "DD MMM YYYY"
    const formattedDate = inputDate.format("DD MMM YYYY");

    // Print the formatted date
    console.log(formattedDate);
    return formattedDate;
  }

}
