export default surveys = [{
  id: 201,
  sessionId: 101,
  postSession: false,
  title: "Sample Survey",
  description: "this is a sample pre-session survey",
  questions: [
    {
      id: 301,
      content: "این یک سوال نمونه است",
      options: [
        {value:1, label:"هرگز"},
        {value:2, label:"اندکی"},
        {value:3, label:"شاید"},
        {value:4, label:"اغلب"},
        {value:5, label:"همیشه"}
      ]
    },
    {
      id: 302,
      content: "سوال دوم",
      options: [
        {value:1, label:"هرگز"},
        {value:2, label:"اندکی"},
        {value:3, label:"شاید"},
        {value:4, label:"اغلب"},
        {value:5, label:"همیشه"}
      ]
    }
  ]
}]