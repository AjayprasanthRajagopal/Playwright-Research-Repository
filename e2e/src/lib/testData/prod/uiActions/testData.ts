const uiActions = {
  testUrl: "https://letcode.in/test",
  homePageUrl: "https://letcode.in/",

  header: "Practice and become pro in test automation",

  textBox:{
    enterName: "Ajayprasanth Prod",
    apendText: "Person PROD",
    getText: "ortonikc"
  },

  button:{
    background_color: "rgb(138, 77, 118)",
    longPressMsg: "Button has been long pressed"
  },
  dropDown:
    {
      fruit: "Orange",
      superHeroes:["Captain America", "Daredevil"],
      notification:(value: string)=> `You have selected ${value}`,
      language: "C#",
      country: "India"
    },
  frame:
    {
      firstName : "Ajay PROD",
      lastName : "prasanth PROD",
      email : "2019wa15538@wilp.bits-pilani.ac.in",
    }

};
export default uiActions;
