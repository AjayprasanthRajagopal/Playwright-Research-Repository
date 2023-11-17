import moment from "moment";

export class DateTimeUtility {
  constructor ()   {

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

  public getMomentTime (format: string, hours: number, minutes: number): string {
    return moment().add(hours, "hours").add(minutes, "minute").format(format);
  }

  currentTime () {
    const currentTime = this.getMomentTime("hh:mma", 0, 0);
    return currentTime.replace("m", "");
  }

}
