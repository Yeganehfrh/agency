export default sessions = { 
  timestamp: '234342323',
  sessions: [{
    audioFile: 'one.mp3',
    id: 100,
    title: 'آشنایی با هیپنوتیزم',
    instructions: 'لطفن در مکانی آرام و با هدفون به این صورت گوش دهید.',
    description: 'در این جلسه شما با مفاهیم هیپنوتیزم و تلقین آشنا می‌شوید. هم‌چنین راهنمای ادامهٔ کار در این جلسه ارائه می‌شود.',
    preSurvey: {
      title: "پرسش‌نامهٔ پیشین",
      description: "No description",
      id: 201,
      questions: [{
        id: 301,
        content: "این یک سوال نمونه است",
        options: [
          {value:1, label:"هرگز"},
          {value:2, label:"اندکی"},
          {value:3, label:"شاید"},
          {value:4, label:"اغلب"},
          {value:5, label:"همیشه"}]
      },{
        id: 302,
        content: "سوال دوم",
        options: [
          {value:1, label:"هرگز"},
          {value:2, label:"اندکی"},
          {value:3, label:"شاید"},
          {value:4, label:"اغلب"},
          {value:5, label:"همیشه"}]
        }]
      }
  },{
    audioFile: 'eye_closure_yeg_part1.mp3',
    id: 101,
    title: 'جلسهٔ اول',
    description: 'در جلسهٔ نخست به مدت ۱۰ دقیقه شما فرآیند خلسه را تمرین خواهید نمود.',
    preSurvey: {
      questions: []
    }
    },{
    audioFile: 'one.mp3',
    id: 102,
    title: 'جلسهٔ دوم',
    description: 'حالت خلسهٔ شما در این جلسه تعمیق خواهد شد. هم‌چنین برای افزایش اعتماد به نفس راه‌کاری ارائه می‌شود.',
    preSurvey: {
      questions: []
    }
    }]
};