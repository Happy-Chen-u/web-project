const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors());
const port = 8080;

const universitiesData = [
  {
    universityId: 1,
    name: "成功大學",
    places: [
      {
        placeId: 101,
        name: "紅樓小館",
        regularHours: {
          monday: { open: null, close: null },
          tuesday: { open: "10:30", close: "21:00" },
          wednesday: { open: "10:30", close: "21:00" },
          thursday: { open: "10:30", close: "21:00" },
          friday: { open: "10:30", close: "21:00" },
          saturday: { open: "10:30", close: "21:00" },
          sunday: { open: "10:30", close: "21:00" }
        },
      },
      {
        placeId: 102,
        name: "大醬川麵館",
        regularHours: {
          monday: [
            { open: "11:00", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          tuesday: [
            { open: "11:00", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          wednesday: [
            { open: "11:00", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          thursday: [
            { open: "11:00", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          friday: [
            { open: "11:00", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          saturday: { open: null, close: null },
          sunday: [
            { open: "11:00", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
        },

      },
      {
        placeId: 103,
        name: "老友小吃",
        regularHours: {
          monday: { open: "10:00", close: "21:00" },
          tuesday: { open: "10:00", close: "21:00" },
          wednesday: { open: "10:00", close: "21:00" },
          thursday: { open: "10:00", close: "21:00" },
          friday: { open: "10:00", close: "21:00" },
          saturday: { open: "10:00", close: "21:00" },
          sunday: { open: "10:00", close: "21:00" }
        },
      },
      {
        placeId: 104,
        name: "大口咬定",
        regularHours: {
          monday: { open: null, close: null },
          tuesday: { open: "11:00", close: "21:00" },
          wednesday: { open: "11:00", close: "21:00" },
          thursday: { open: "11:00", close: "21:00" },
          friday: { open: "11:00", close: "21:00" },
          saturday: { open: "11:00", close: "21:00" },
          sunday: { open: "11:00", close: "21:00" }
        },
      },
      {
        placeId: 105,
        name: "廣越美食",
        regularHours: {
          monday: [
            { open: "11:00", close: "15:00" },
            { open: "16:30", close: "19:30" }
          ],
          tuesday: [
            { open: "11:00", close: "15:00" },
            { open: "16:30", close: "19:30" }
          ],
          wednesday: [
            { open: "11:00", close: "15:00" },
            { open: "16:30", close: "19:30" }
          ],
          thursday: [
            { open: "11:00", close: "15:00" },
            { open: "16:30", close: "19:30" }
          ],
          friday: [
            { open: "11:00", close: "15:00" },
            { open: "16:30", close: "19:30" }
          ],
          saturday: { open: "11:00", close: "15:00" },
          sunday: { open: null, close: null },
        },
      },
      {
        placeId: 106,
        name: "穴居咖啡",
        regularHours: {
          monday: { open: "12:00", close: "18:00" },
          tuesday: { open: null, close: null },
          wednesday: { open: null, close: null },
          thursday: { open: "12:00", close: "18:00" },
          friday: { open: "12:00", close: "18:00" },
          saturday: { open: "12:00", close: "18:00" },
          sunday: { open: "12:00", close: "18:00" }
        },
      },
      {
        placeId: 107,
        name: "a Room房間咖啡",
        regularHours: {
          monday: { open: "10:00", close: "17:30" },
          tuesday: { open: null, close: null },
          wednesday: { open: null, close: null },
          thursday: { open: null, close: null },
          friday: { open: "10:00", close: "17:30" },
          saturday: { open: "10:00", close: "17:30" },
          sunday: { open: "10:00", close: "17:30" }
        },
      },
      {
        placeId: 108,
        name: "KOEMON",
        regularHours: {
          monday: { open: "11:30", close: "18:00" },
          tuesday: { open: "11:30", close: "18:00" },
          wednesday: { open: "11:30", close: "18:00" },
          thursday: { open: null, close: null },
          friday: { open: "11:30", close: "18:00" },
          saturday: { open: "11:30", close: "18:00" },
          sunday: { open: "11:30", close: "18:00" }
        },
      },
      {
        placeId: 109,
        name: "大東夜市",
        regularHours: {
          monday: [
            { open: "18:00", close: "23:59" },
            { open: "00:00", close: "1:00" }
          ],
          tuesday: [
            { open: "18:00", close: "23:59" },
            { open: "00:00", close: "1:00" }
          ],
          wednesday: { open: null, close: null },
          thursday: { open: null, close: null },
          friday: [
            { open: "18:00", close: "23:59" },
            { open: "00:00", close: "1:00" }
          ],
          saturday: { open: null, close: null },
          sunday: { open: null, close: null }
        },
      }
    ]
  },
  {
    universityId: 2,
    name: "台灣大學",
    places: [
      {
        placeId: 201,
        name: "鳳城燒臘",
        regularHours: {
          monday: {open: "11:00", close: "20:30"},
          tuesday: {open: "11:00", close: "20:30"},
          wednesday: {open: "11:00", close: "20:30"},
          thursday: {open: "11:00", close: "20:30"},
          friday: {open: "11:00", close: "20:30"},
          saturday: {open: "11:00", close: "20:30"},
          sunday: {open: "11:00", close: "20:30"}
        },
      },
      {
        placeId: 202,
        name: "臺一牛奶大王",
        regularHours: {
          monday: {open: "11:00", close: "23:00"},
          tuesday: {open: "11:00", close: "23:00"},
          wednesday: {open: "11:00", close: "23:00"},
          thursday: {open: "11:00", close: "23:00"},
          friday: {open: "11:00", close: "23:00"},
          saturday: {open: "11:00", close: "23:00"},
          sunday: {open: "11:00", close: "23:00"}
        },
      },
      {
        placeId: 203,
        name: "藍家割包",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "11:00", close: "22:00"},
          wednesday: {open: "11:00", close: "22:00"},
          thursday: {open: "11:00", close: "22:00"},
          friday: {open: "11:00", close: "22:00"},
          saturday: {open: "11:00", close: "22:00"},
          sunday: {open: "11:00", close: "22:00"}
        },
      },
      {
        placeId: 204,
        name: "金名號雞肉飯",
        regularHours: {
          monday: [
            { open: "11:00", close: "14:30" },
            { open: "16:30", close: "20:30" }
          ],
          tuesday: [
            { open: "11:00", close: "14:30" },
            { open: "16:30", close: "20:30" }
          ],
          wednesday: [
            { open: "11:00", close: "14:30" },
            { open: "16:30", close: "20:30" }
          ],
          thursday: [
            { open: "11:00", close: "14:30" },
            { open: "16:30", close: "20:30" }
          ],
          friday: [
            { open: "11:00", close: "14:30" },
            { open: "16:30", close: "20:30" }
          ],
          saturday: [
            { open: "11:00", close: "14:30" },
            { open: "16:30", close: "20:30" }
          ],
          sunday: [
            { open: "11:00", close: "14:30" },
            { open: "16:30", close: "20:30" }
          ],
        },
      },
      {
        placeId: 205,
        name: "可可布朗",
        regularHours: {
          monday: {open: "12:00", close: "20:30"},
          tuesday: {open: "12:00", close: "20:30"},
          wednesday: {open: "12:00", close: "20:30"},
          thursday: {open: "12:00", close: "20:30"},
          friday: {open: "12:00", close: "20:30"},
          saturday: {open: "12:00", close: "20:30"},
          sunday: {open: "12:00", close: "20:30"}
        },
      },
      {
        placeId: 206,
        name: "春山茶水舖",
        regularHours: {
          monday: {open: "8:00", close: "16:00"},
          tuesday: {open: "8:00", close: "16:00"},
          wednesday: {open: "8:00", close: "16:00"},
          thursday: {open: "8:00", close: "16:00"},
          friday: {open: "8:00", close: "16:00"},
          saturday: {open: "8:00", close: "16:00"},
          sunday: {open: null, close: null}
        },
      },
      {
        placeId: 207,
        name: "巴伯Q奶 Bubble tea 黑糖珍珠牛奶專賣",
        regularHours: {
          monday: {open: "15:30", close: "23:00"},
          tuesday: {open: "15:30", close: "23:00"},
          wednesday: {open: "15:30", close: "23:00"},
          thursday: {open: "15:30", close: "23:00"},
          friday: {open: "15:30", close: "23:00"},
          saturday: {open: "15:30", close: "23:00"},
          sunday: {open: "15:30", close: "23:00"}
        },
      },
      {
        placeId: 208,
        name: "達文西咖啡",
        regularHours: {
          monday: {open: "10:30", close: "18:30"},
          tuesday: {open: "10:30", close: "18:30"},
          wednesday: {open: "10:30", close: "18:30"},
          thursday: {open: "10:30", close: "18:30"},
          friday: {open: "10:30", close: "18:30"},
          saturday: {open: "10:30", close: "18:30"},
          sunday: {open: "10:30", close: "18:30"}
        },
      },
      {
        placeId: 209,
        name: "聞山咖啡",
        regularHours: {
          monday: {open: "12:00", close: "20:00"},
          tuesday: {open: "12:00", close: "20:00"},
          wednesday: {open: "12:00", close: "20:00"},
          thursday: {open: "12:00", close: "20:00"},
          friday: {open: "12:00", close: "20:00"},
          saturday: {open: "12:00", close: "20:00"},
          sunday: {open: "12:00", close: "20:00"}
        },
      },
      {
        placeId: 210,
        name: "公館夜市",
        regularHours: {
          monday: {open: "15:00", close: "23:45"},
          tuesday: {open: "15:00", close: "23:45"},
          wednesday: {open: "15:00", close: "23:45"},
          thursday: {open: "15:00", close: "23:45"},
          friday: {open: "15:00", close: "23:45"},
          saturday: {open: "15:00", close: "23:45"},
          sunday: {open: "15:00", close: "23:45"}
        },
      }
    ]
  },
  {
    universityId: 3,
    name: "國立政治大學",
    places: [
      {
        placeId: 301,
        name: "湘湘牛排館",
        regularHours: {
          monday: {open: "11:30", close: "22:30"},
          tuesday: {open: "11:30", close: "22:30"},
          wednesday: {open: "11:30", close: "22:30"},
          thursday: {open: "11:30", close: "22:30"},
          friday: {open: "11:30", close: "22:30"},
          saturday: {open: "11:30", close: "22:30"},
          sunday: {open: "11:30", close: "22:30"}
        },
      },
      {
        placeId: 302,
        name: "MJ餛飩超人",
        regularHours: {
          monday: [
            { open: "11:30", close: "15:00" },
            { open: "16:30", close: "20:00" }
          ],
          tuesday: [
            { open: "11:30", close: "15:00" },
            { open: "16:30", close: "20:00" }
          ],
          wednesday: [
            { open: "11:30", close: "15:00" },
            { open: "16:30", close: "20:00" }
          ],
          thursday: [
            { open: "11:30", close: "15:00" },
            { open: "16:30", close: "20:00" }
          ],
          friday: [
            { open: "11:30", close: "15:00" },
            { open: "16:30", close: "20:00" }
          ],
          saturday: [
            { open: "11:30", close: "15:00" },
            { open: "16:30", close: "20:00" }
          ],
          sunday: {open: null, close: null}
        },
      },
      {
        placeId: 303,
        name: "韓大佬",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: [
            { open: "11:00", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          wednesday: [
            { open: "11:00", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          thursday: [
            { open: "11:00", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          friday: [
            { open: "11:00", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          saturday: [
            { open: "11:00", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          sunday: [
            { open: "11:00", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
        },
      },
      {
        placeId: 304,
        name: "政大排骨王便當",
        regularHours: {
          monday: [
            { open: "10:00", close: "13:30" },
            { open: "16:00", close: "19:00" }
          ],
          tuesday: [
            { open: "10:00", close: "13:30" },
            { open: "16:00", close: "19:00" }
          ],
          wednesday: [
            { open: "11:00", close: "13:30" },
            { open: "16:00", close: "19:00" }
          ],
          thursday: [
            { open: "11:00", close: "13:30" },
            { open: "16:00", close: "19:00" }
          ],
          friday: [
            { open: "11:00", close: "13:30" },
            { open: "16:00", close: "19:00" }
          ],
          saturday: { open: "10:00", close: "13:30" },
          sunday: {open: null, close: null}
        },
      },
      {
        placeId: 305,
        name: "極鮮滷味",
        regularHours: {
          monday: {open: "14:00", close: "22:00"},
          tuesday: {open: "14:00", close: "22:00"},
          wednesday: {open: "14:00", close: "22:00"},
          thursday: {open: "14:00", close: "22:00"},
          friday: {open: "14:00", close: "22:00"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null}
        },
      },
      {
        placeId: 306,
        name: "the Second Half",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "12:00", close: "21:00"},
          wednesday: {open: "12:00", close: "21:00"},
          thursday: {open: "12:00", close: "21:00"},
          friday: {open: "12:00", close: "21:00"},
          saturday: {open: "12:00", close: "21:00"},
          sunday: {open: "12:00", close: "21:00"}
        },
      },
      {
        placeId: 307,
        name: "咖啡大亨",
        regularHours: {
          monday: {open: "10:00", close: "18:00"},
          tuesday: {open: "10:00", close: "18:00"},
          wednesday: {open: "10:00", close: "18:00"},
          thursday: {open: "10:00", close: "18:00"},
          friday: {open: null, close: null},
          saturday: {open: "10:00", close: "16:30"},
          sunday: {open: null, close: null}
        },
      },
      {
        placeId: 308,
        name: "政大伊果咖啡",
        regularHours: {
          monday: {open: "7:30", close: "19:30"},
          tuesday: {open: "7:30", close: "19:30"},
          wednesday: {open: "7:30", close: "19:30"},
          thursday: {open: "7:30", close: "19:30"},
          friday: {open: "7:30", close: "19:30"},
          saturday: {open: "7:30", close: "19:30"},
          sunday: {open: "7:30", close: "19:30"}
        },
      },
      {
        placeId: 309,
        name: "景美夜市",
        regularHours: {
          monday: {open: "17:00", close: "23:59"},
          tuesday: {open: "17:00", close: "23:59"},
          wednesday: {open: "17:00", close: "23:59"},
          thursday: {open: "17:00", close: "23:59"},
          friday: {open: "17:00", close: "23:59"},
          saturday: {open: "17:00", close: "23:59"},
          sunday: {open: "17:00", close: "23:59"}
        },
      }
    ]
  },
  {
    universityId: 4,
    name: "國立東華大學",
    places: [
      {
        placeId: 401,
        name: "老師傅",
        regularHours: {
          monday: [
            { open: "11:30", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          tuesday: [
            { open: "11:30", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          wednesday: [
            { open: "11:30", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          thursday: [
            { open: "11:30", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          friday: [
            { open: "11:30", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          saturday: [
            { open: "11:30", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
          sunday: [
            { open: "11:30", close: "14:00" },
            { open: "16:30", close: "20:30" }
          ],
        },
      },
      {
        placeId: 402,
        name: "這藝鍋",
        regularHours: {
          monday: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          tuesday: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          wednesday: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          thursday: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          friday: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          saturday: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
          sunday: [
            { open: "11:30", close: "14:00" },
            { open: "17:00", close: "21:00" }
          ],
        },
      },
      {
        placeId: 403,
        name: "盛夏果實早午餐",
        regularHours: {
          monday: {open: "10:00", close: "16:00"},
          tuesday: {open: "10:00", close: "16:00"},
          wednesday: {open: "10:00", close: "16:00"},
          thursday: {open: "10:00", close: "16:00"},
          friday: {open: "10:00", close: "16:00"},
          saturday: {open: "10:00", close: "16:00"},
          sunday: {open: "10:00", close: "16:00"}
        },
      },
      {
        placeId: 404,
        name: "炙燒老爹",
        regularHours: {
          monday: {open: "17:00", close: "23:30"},
          tuesday: {open: "17:00", close: "23:30"},
          wednesday: {open: null, close: null},
          thursday: {open: "17:00", close: "23:30"},
          friday: {open: "17:00", close: "23:30"},
          saturday: {open: "17:00", close: "23:30"},
          sunday: {open: "17:00", close: "23:30"}
        },
      },
      {
        placeId: 405,
        name: "龍城燒臘",
        regularHours: {
          monday: [
            { open: "10:30", close: "13:30" },
            { open: "16:15", close: "18:30" }
          ],
          tuesday: [
            { open: "10:30", close: "13:30" },
            { open: "16:15", close: "18:30" }
          ],
          wednesday: [
            { open: "10:30", close: "13:30" },
            { open: "16:15", close: "18:30" }
          ],
          thursday: [
            { open: "10:30", close: "13:30" },
            { open: "16:15", close: "18:30" }
          ],
          friday: [
            { open: "10:30", close: "13:30" },
            { open: "16:15", close: "18:30" }
          ],
          saturday: [
            { open: "10:30", close: "13:30" },
            { open: "16:15", close: "18:30" }
          ],
          sunday: { open: null, close: null },
        },
      },
      {
        placeId: 406,
        name: "9803咖啡廳",
        regularHours: {
          monday: {open: "12:30", close: "18:30"},
          tuesday: {open: "12:30", close: "18:30"},
          wednesday: {open: "12:30", close: "18:30"},
          thursday: {open: null, close: null},
          friday: {open: "12:30", close: "18:30"},
          saturday: {open: "12:30", close: "18:30"},
          sunday: {open: "12:30", close: "18:30"}
        },
      },

      {
        placeId: 407,
        name: "東大門夜市",
        regularHours: {
          monday: {open: "18:00", close: "23:59"},
          tuesday: {open: "18:00", close: "23:59"},
          wednesday: {open: "18:00", close: "23:59"},
          thursday: {open: "18:00", close: "23:59"},
          friday: {open: "18:00", close: "23:59"},
          saturday: {open: "18:00", close: "23:59"},
          sunday: {open: "18:00", close: "23:59"},
        },
      }
    ]
  },
  {
    universityId: 5,
    name: "國立中興大學",
    places: [
      {
        placeId: 501,
        name: "麵麵pasta",
        regularHours: {
          monday: [
            {open: "11:00", close: "15:00"},
            {open: "17:00", close: "20:30"}
          ],
          tuesday: [
            {open: "11:00", close: "15:00"},
            {open: "17:00", close: "20:30"}
          ],
          wednesday: [
            {open: "11:00", close: "15:00"},
            {open: "17:00", close: "20:30"}
          ],
          thursday: [
            {open: "11:00", close: "15:00"},
            {open: "17:00", close: "20:30"}
          ],
          friday: [
            {open: "11:00", close: "15:00"},
            {open: "17:00", close: "20:30"}
          ],
          saturday: [
            {open: "11:00", close: "15:00"},
            {open: "17:00", close: "20:30"}
          ],
          sunday: [
            {open: "11:00", close: "15:00"},
            {open: "17:00", close: "20:30"}
          ],
        },
      },
      {
        placeId: 502,
        name: "聞香牛肉麵",
        regularHours: {
          monday: {open: "11:00", close: "21:00"},
          tuesday: {open: "11:00", close: "21:00"},
          wednesday: {open: "11:00", close: "21:00"},
          thursday: {open: "11:00", close: "21:00"},
          friday: {open: "11:00", close: "21:00"},
          saturday: {open: "11:00", close: "21:00"},
          sunday: {open: "11:00", close: "21:00"}
        },
      },
      {
        placeId: 503,
        name: "老舅餃子館",
        regularHours: {
          monday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          tuesday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          wednesday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          thursday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          friday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          saturday: {open: "11:00", close: "14:00"},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 504,
        name: "寶窩咖喱簡餐",
        regularHours: {
          monday: {open: "11:30", close: "21:00"},
          tuesday: {open: "11:30", close: "21:00"},
          wednesday: {open: "11:30", close: "21:00"},
          thursday: {open: "11:30", close: "21:00"},
          friday: {open: "11:30", close: "21:00"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null}
        },
      },
      {
        placeId: 505,
        name: "炒飯行家",
        regularHours: {
          monday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "20:40"}
          ],
          tuesday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "20:40"}
          ],
          wednesday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "20:40"}
          ],
          thursday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "20:40"}
          ],
          friday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "20:40"}
          ],
          saturday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "20:40"}
          ],
          sunday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "20:40"}
          ],
        },
      },
      {
        placeId: 506,
        name: "迴咖啡 CoffeeBack",
        regularHours: {
          monday: {open: "12:30", close: "20:00"},
          tuesday: {open: "12:30", close: "20:00"},
          wednesday: {open: null, close: null},
          thursday: {open: "12:30", close: "20:00"},
          friday: {open: "12:30", close: "20:00"},
          saturday: {open: "12:30", close: "20:00"},
          sunday: {open: "12:30", close: "20:00"}
        },
      },
      {
        placeId: 507,
        name: "MU咖啡輕食小賣所",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "11:30", close: "18:30"},
          wednesday: {open: "11:30", close: "18:30"},
          thursday: {open: "11:30", close: "18:30"},
          friday: {open: "11:30", close: "18:30"},
          saturday: {open: "11:30", close: "18:30"},
          sunday: {open: "11:30", close: "18:30"}
        },
      },
      {
        placeId: 508,
        name: "35巷咖啡",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "13:00", close: "18:00"},
          wednesday: {open: "13:00", close: "18:00"},
          thursday: {open: "13:00", close: "18:00"},
          friday: {open: "13:00", close: "18:00"},
          saturday: {open: "13:00", close: "18:00"},
          sunday: {open: "13:00", close: "18:00"}
        },
      },
      {
        placeId: 509,
        name: "忠孝路夜市",
        regularHours: {
          monday: {open: "15:00", close: "23:00"},
          tuesday: {open: "15:00", close: "23:00"},
          wednesday: {open: "15:00", close: "23:00"},
          thursday: {open: "15:00", close: "23:00"},
          friday: {open: "15:00", close: "23:00"},
          saturday: {open: "15:00", close: "23:00"},
          sunday: {open: "15:00", close: "23:00"}
        },
      },


    ]
  },
  {
    universityId: 6,
    name: "國立清華大學",
    places: [
      {
        placeId: 601,
        name: "日出咖啡",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "10:00", close: "18:00"},
          wednesday: {open: "10:00", close: "18:00"},
          thursday: {open: "10:00", close: "18:00"},
          friday: {open: "10:00", close: "18:00"},
          saturday: {open: "10:00", close: "18:00"},
          sunday:{open: "10:00", close: "18:00"},
        },
      },
      {
        placeId: 602,
        name: "Defcoffee",
        regularHours: {
          monday: {open: "7:30", close: "15:00"},
          tuesday: {open: "7:30", close: "15:00"},
          wednesday: {open: "7:30", close: "15:00"},
          thursday: {open: "7:30", close: "15:00"},
          friday: {open: "7:30", close: "15:00"},
          saturday: {open: "10:00", close: "16:00"},
          sunday:{open: null, close: null},
        },
      },
      {
        placeId: 603,
        name: "飛行樹屋咖啡",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "11:30", close: "23:59"},
          wednesday: {open: "11:30", close: "23:59"},
          thursday: {open: "11:30", close: "23:59"},
          friday: {open: "11:30", close: "23:59"},
          saturday: {open: "11:30", close: "23:59"},
          sunday:{open: "11:30", close: "23:59"},
        },
      },
      {
        placeId: 604,
        name: "水源街麵食館",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          wednesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          thursday:[
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          friday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          saturday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          sunday:[
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
        },
      },
      {
        placeId: 605,
        name: "港島主麵",
        regularHours: {
          monday: {open: "11:00", close: "20:00"},
          tuesday: {open: "11:00", close: "20:00"},
          wednesday: {open: "11:00", close: "20:00"},
          thursday: {open: "11:00", close: "20:00"},
          friday: {open: "11:00", close: "20:00"},
          saturday: {open: "11:00", close: "20:00"},
          sunday: {open: "11:00", close: "20:00"},
        },
      },
      {
        placeId: 606,
        name: "永記牛肉麵",
        regularHours: {
          monday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "20:00"}
          ],
          tuesday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "20:00"}
          ],
          wednesday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "20:00"}
          ],
          thursday:[
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "20:00"}
          ],
          friday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "20:00"}
          ],
          saturday: {open: null, close: null},
          sunday:[
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "20:00"}
          ],
        },
      },
      {
        placeId: 607,
        name: "貝恩義大利料理",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          wednesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          thursday:[
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          friday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          saturday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          sunday:[
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
        },
      },
      {
        placeId: 608,
        name: "雙饗丼",
        regularHours: {
          monday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          tuesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          wednesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          thursday:[
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          friday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          saturday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
          sunday:[
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:30"}
          ],
        },
      },
      {
        placeId: 609,
        name: "清大夜市",
        regularHours: {
          monday: {open: "17:00", close: "23:59"},
          tuesday: {open: "17:00", close: "23:59"},
          wednesday: {open: "17:00", close: "23:59"},
          thursday: {open: "17:00", close: "23:59"},
          friday: {open: "17:00", close: "23:59"},
          saturday: {open: "17:00", close: "23:59"},
          sunday: {open: "17:00", close: "23:59"},
        },
      },
    ]
  },
  {
    universityId: 7,
    name: "私立東吳大學(城中校區)",
    places: [
      {
        placeId: 701,
        name: "中原福州乾麵",
        regularHours: {
          monday: {open: "6:00", close: "19:30"},
          tuesday: {open: "6:00", close: "19:30"},
          wednesday: {open: "6:00", close: "19:30"},
          thursday: {open: "6:00", close: "19:30"},
          friday: {open: "6:00", close: "19:30"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 702,
        name: "珍香鍋貼",
        regularHours: {
          monday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "19:30"}
          ],
          tuesday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "19:30"}
          ],
          wednesday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "19:30"}
          ],
          thursday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "19:30"}
          ],
          friday: [
            {open: "11:00", close: "13:30"},
            {open: "16:00", close: "19:30"}
          ],
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 703,
        name: "背包廚房手工披薩咖啡屋",
        regularHours: {
          monday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "20:00"}
          ],
          tuesday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "20:00"}
          ],
          wednesday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "20:00"}
          ],
          thursday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "20:00"}
          ],
          friday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "20:00"}
          ],
          saturday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "20:00"}
          ],
          sunday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "20:00"}
          ],
        },
      },
      {
        placeId: 704,
        name: "樺林乾麵",
        regularHours: {
          monday: {open: "7:30", close: "14:30"},
          tuesday: {open: "7:30", close: "14:30"},
          wednesday: {open: "7:30", close: "14:30"},
          thursday: {open: "7:30", close: "14:30"},
          friday: {open: "7:30", close: "14:30"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 705,
        name: "京畿道韓式料理",
        regularHours: {
          monday: {open: "11:30", close: "14:00"},
          tuesday: {open: "11:30", close: "14:00"},
          wednesday: {open: "11:30", close: "14:00"},
          thursday: {open: "11:30", close: "14:00"},
          friday: {open: "11:30", close: "14:00"},
          saturday: {open: "11:30", close: "14:00"},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 706,
        name: "J&J CAFE",
        regularHours: {
          monday: {open: "10:00", close: "20:00"},
          tuesday: {open: "10:00", close: "20:00"},
          wednesday: {open: "10:00", close: "20:00"},
          thursday: {open: "10:00", close: "20:00"},
          friday: {open: "10:00", close: "20:00"},
          saturday: {open: "10:00", close: "20:00"},
          sunday: {open: "10:00", close: "20:00"},
        },
      },
      {
        placeId: 707,
        name: "Cafe365咖啡館",
        regularHours: {
          monday: {open: "7:00", close: "18:00"},
          tuesday: {open: "7:00", close: "18:00"},
          wednesday: {open: "7:00", close: "18:00"},
          thursday: {open: "7:00", close: "18:00"},
          friday: {open: "7:00", close: "18:00"},
          saturday: {open: "9:00", close: "17:00"},
          sunday: {open: "9:00", close: "17:00"},
        },
      },
      {
        placeId: 708,
        name: "艾萃咖啡 VR BAR",
        regularHours: {
          monday: {open: "9:30", close: "19:00"},
          tuesday: {open: "9:30", close: "19:00"},
          wednesday: {open: "9:30", close: "19:00"},
          thursday: {open: "9:30", close: "19:00"},
          friday: {open: "9:30", close: "19:00"},
          saturday: {open: "9:30", close: "18:00"},
          sunday: {open: "9:30", close: "18:00"},
        },
      },
      {
        placeId: 709,
        name: "城中市場",
        regularHours: {
          monday: {open: "6:00", close: "23:59"},
          tuesday: {open: "6:00", close: "23:59"},
          wednesday: {open: "6:00", close: "23:59"},
          thursday: {open: "6:00", close: "23:59"},
          friday: {open: "6:00", close: "23:59"},
          saturday: {open: "6:00", close: "23:59"},
          sunday: {open: "6:00", close: "23:59"},
        },
      },
    ]
  },

  {
    universityId: 8,
    name: "國立中央大學",
    places: [
      {
        placeId: 801,
        name: "No.17 White House",
        regularHours: {
          monday: [
            {open: "11:30", close: "13:30"},
            {open: "17:00", close: "19:30"}
          ],
          tuesday: [
            {open: "11:30", close: "13:30"},
            {open: "17:00", close: "19:30"}
          ],
          wednesday: [
            {open: "11:30", close: "13:30"},
            {open: "17:00", close: "19:30"}
          ],
          thursday: [
            {open: "11:30", close: "13:30"},
            {open: "17:00", close: "19:30"}
          ],
          friday: [
            {open: "11:30", close: "13:30"},
            {open: "17:00", close: "19:30"}
          ],
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 802,
        name: "LALA Kitchen 新美式餐廳",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: null, close: null},
          wednesday: {open: "11:30", close: "21:00"},
          thursday: {open: "11:30", close: "21:00"},
          friday: {open: "11:30", close: "21:00"},
          saturday: {open: "11:30", close: "21:00"},
          sunday: {open: "11:30", close: "21:00"},
        },
      },
      {
        placeId: 803,
        name: "麥克小姐",
        regularHours: {
          monday: [
            {open: "11:00", close: "14:30"},
            {open: "17:00", close: "20:30"}
          ],
          tuesday: [
            {open: "11:00", close: "14:30"},
            {open: "17:00", close: "20:30"}
          ],
          wednesday: [
            {open: "11:00", close: "14:30"},
            {open: "17:00", close: "20:30"}
          ],
          thursday: [
            {open: "11:00", close: "14:30"},
            {open: "17:00", close: "20:30"}
          ],
          friday: [
            {open: "11:00", close: "14:30"},
            {open: "17:00", close: "20:30"}
          ],
          saturday: [
            {open: "11:00", close: "14:30"},
            {open: "17:00", close: "20:30"}
          ],
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 804,
        name: "熱浪島南洋蔬食茶堂",
        regularHours: {
          monday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          tuesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          wednesday: {open: null, close: null},
          thursday: {open: null, close: null},
          friday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          saturday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
          sunday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "20:00"}
          ],
        },
      },
      {
        placeId: 805,
        name: "新負麵能量2.0",
        regularHours: {
          monday: {open: "10:00", close: "21:00"},
          tuesday: {open: "10:00", close: "21:00"},
          wednesday: {open: "10:00", close: "21:00"},
          thursday: {open: "10:00", close: "21:00"},
          friday: {open: "10:00", close: "21:00"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 806,
        name: "Backdoor Café",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "12:30", close: "18:00"},
          wednesday: {open: "12:30", close: "18:00"},
          thursday: {open: "12:30", close: "18:00"},
          friday: {open: "12:30", close: "18:00"},
          saturday: {open: "12:30", close: "18:00"},
          sunday: {open: "12:30", close: "18:00"},
        },
      },
      {
        placeId: 807,
        name: "樂奇咖啡豆Lucky café & roastery",
        regularHours: {
          monday: {open: "12:00", close: "18:00"},
          tuesday: {open: "12:00", close: "18:00"},
          wednesday: {open: "12:00", close: "18:00"},
          thursday: {open: "12:00", close: "18:00"},
          friday: {open: "12:00", close: "18:00"},
          saturday: {open: "12:00", close: "18:00"},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 808,
        name: "藍屋咖啡廳",
        regularHours: {
          monday: {open: "9:00", close: "17:00"},
          tuesday: {open: "9:00", close: "17:00"},
          wednesday: {open: "9:00", close: "17:00"},
          thursday: {open: "9:00", close: "17:00"},
          friday: {open: "9:00", close: "17:00"},
          saturday: {open: null, close: null},
          sunday: {open: "9:00", close: "17:00"},
        },
      },
      {
        placeId: 809,
        name: "中壢（新明）觀光夜市",
        regularHours: {
          monday: {open: "17:00", close: "23:59"},
          tuesday: {open: "17:00", close: "23:59"},
          wednesday: {open: "17:00", close: "23:59"},
          thursday: {open: "17:00", close: "23:59"},
          friday: {open: "17:00", close: "23:59"},
          saturday: {open: "17:00", close: "23:59"},
          sunday: {open: "17:00", close: "23:59"},
        },
      },
    ]
  },
  {
    universityId: 9,
    name: "國立陽明交通大學",
    places: [
      {
        placeId: 901,
        name: "六家橋頭早餐(客院早餐)",
        regularHours: {
          monday: {open: "3:30", close: "7:30"},
          tuesday: {open: "3:30", close: "7:30"},
          wednesday: {open: "3:30", close: "7:30"},
          thursday: {open: "3:30", close: "7:30"},
          friday: {open: "3:30", close: "7:30"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 902,
        name: "傑里麵包",
        regularHours: {
          monday: {open: "11:00", close: "19:00"},
          tuesday: {open: "11:00", close: "19:00"},
          wednesday: {open: "11:00", close: "19:00"},
          thursday: {open: "11:00", close: "19:00"},
          friday: {open: "11:00", close: "19:00"},
          saturday: {open: "11:00", close: "19:00"},
          sunday: {open: "11:00", close: "19:00"},
        },
      },
      {
        placeId: 903,
        name: "燃舍串燒き金山總店",
        regularHours: {
          monday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "1:00"}
          ],
          tuesday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "1:00"}
          ],
          wednesday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "1:00"}
          ],
          thursday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "1:00"}
          ],
          friday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "1:00"}
          ],
          saturday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "1:00"}
          ],
          sunday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "1:00"}
          ],
        },
      },
      {
        placeId: 904,
        name: "傳說上的鳥（伝説上の鳥 ）雞白湯拉麵 ",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "17:00", close: "21:00"},
          wednesday: {open: "17:00", close: "21:00"},
          thursday: {open: "17:00", close: "21:00"},
          friday: {open: "17:00", close: "21:00"},
          saturday: {open: "17:00", close: "21:00"},
          sunday: {open: "17:00", close: "21:00"},
        },
      },
      {
        placeId: 905,
        name: "森作餐廚",
        regularHours: {
          monday: [
            {open: "11:00", close: "13:00"},
            {open: "17:00", close: "19:00"}
          ],
          tuesday: [
            {open: "11:00", close: "13:00"},
            {open: "17:00", close: "19:00"}
          ],
          wednesday: [
            {open: "11:00", close: "13:00"},
            {open: "17:00", close: "19:00"}
          ],
          thursday: [
            {open: "11:00", close: "13:00"},
            {open: "17:00", close: "19:00"}
          ],
          friday: [
            {open: "11:00", close: "13:00"},
            {open: "17:00", close: "19:00"}
          ],
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 906,
        name: "貳參咖啡二店",
        regularHours: {
          monday: {open: "10:00", close: "18:00"},
          tuesday: {open: "10:00", close: "18:00"},
          wednesday: {open: "10:00", close: "18:00"},
          thursday: {open: "10:00", close: "18:00"},
          friday: {open: "10:00", close: "18:00"},
          saturday: {open: "10:00", close: "18:00"},
          sunday: {open: "10:00", close: "18:00"},
        },
      },
      {
        placeId: 907,
        name: "Hidden off",
        regularHours: {
          monday: {open: "10:30", close: "18:30"},
          tuesday: {open: "10:30", close: "18:30"},
          wednesday: {open: null, close: null},
          thursday: {open: null, close: null},
          friday: {open: "10:30", close: "18:30"},
          saturday: {open: "10:30", close: "18:30"},
          sunday: {open: "10:30", close: "18:30"},
        },
      },

      {
        placeId: 908,
        name: "新竹慈雲夜市",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: null, close: null},
          wednesday: {open: null, close: null},
          thursday: {open: null, close: null},
          friday: {open: "18:00", close:"23:00"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
    ]
  },
  {
    universityId: 10,
    name: "東海大學",
    places: [
      {
        placeId: 1001,
        name: "遇見MASA日式定食",
        regularHours: {
          monday: {open: "17:00", close: "21:00"},
          tuesday: {open: "17:00", close: "21:00"},
          wednesday: {open: "17:00", close: "21:00"},
          thursday: {open: "17:00", close: "21:00"},
          friday: {open: "17:00", close: "21:00"},
          saturday: {open: "17:00", close: "21:00"},
          sunday: {open: "17:00", close: "21:00"},
        },
      },
      {
        placeId: 1002,
        name: "來來美食小吃店",
        regularHours: {
          monday: {open: "4:00", close: "21:00"},
          tuesday: {open: "4:00", close: "21:00"},
          wednesday: {open: "4:00", close: "21:00"},
          thursday: {open: "4:00", close: "21:00"},
          friday: {open: "4:00", close: "21:00"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 1003,
        name: "桂伃泰式河粉",
        regularHours: {
          monday: {open: "11:30", close: "19:00"},
          tuesday: {open: "11:30", close: "19:00"},
          wednesday: {open: "11:30", close: "19:00"},
          thursday: {open: "11:30", close: "19:00"},
          friday: {open: "11:30", close: "19:00"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 1004,
        name: "東海何媽媽冰店",
        regularHours: {
          monday: {open: "2:00", close: "20:00"},
          tuesday: {open: "2:00", close: "20:00"},
          wednesday: {open: "2:00", close: "20:00"},
          thursday: {open: "2:00", close: "20:00"},
          friday: {open: "2:00", close: "20:00"},
          saturday: {open: "2:00", close: "20:00"},
          sunday: {open: null, close: null},
        },
      },

      {
        placeId: 1005,
        name: "巧食雞串燒啤酒屋",
        regularHours: {
          monday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "00:30"}
          ],
          tuesday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "00:30"}
          ],
          wednesday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "00:30"}
          ],
          thursday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "00:30"}
          ],
          friday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "00:30"}
          ],
          saturday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "00:30"}
          ],
          sunday: [
            {open: "18:00", close: "23:59"},
            {open: "00:00", close: "00:30"}
          ],
        },
      },
      {
        placeId: 1006,
        name: "1980果汁健康專賣店",
        regularHours: {
          monday: {open: "12:00", close: "19:00"},
          tuesday: {open: "12:00", close: "19:00"},
          wednesday: {open: "12:00", close: "19:00"},
          thursday: {open: "12:00", close: "19:00"},
          friday: {open: "12:00", close: "19:00"},
          saturday: {open: "12:00", close: "17:00"},
          sunday: {open: "12:00", close: "17:00"},
        },
      },

      {
        placeId: 1007,
        name: "草根豐味綠豆沙牛奶專門店",
        regularHours: {
          monday: {open: "10:00", close: "22:00"},
          tuesday: {open: "10:00", close: "22:00"},
          wednesday: {open: "10:00", close: "22:00"},
          thursday: {open: "10:00", close: "22:00"},
          friday: {open: "10:00", close: "22:00"},
          saturday: {open: "10:00", close: "22:00"},
          sunday: {open: "10:00", close: "22:00"},
        },
      },
      {
        placeId: 1008,
        name: "GOOD CIRCLE COFFEE 木和咖啡",
        regularHours: {
          monday: {open: "12:30", close: "22:00"},
          tuesday: {open: "12:30", close: "22:00"},
          wednesday: {open: "12:30", close: "22:00"},
          thursday: {open: null, close: null},
          friday: {open: "12:30", close: "19:00"},
          saturday: {open: "12:30", close: "19:00"},
          sunday: {open: "12:30", close: "19:00"},
        },
      },
      {
        placeId: 1009,
        name: "東海夜市",
        regularHours: {
          monday: {open: "00:00", close: "23:59"},
          tuesday: {open: "00:00", close: "23:59"},
          wednesday: {open: "00:00", close: "23:59"},
          thursday: {open: "00:00", close: "23:59"},
          friday: {open: "00:00", close: "23:59"},
          saturday: {open: "00:00", close: "23:59"},
          sunday: {open: "00:00", close: "23:59"},
        },
      }
    ]
  },
  {
    universityId: 11,
    name: "國立中山大學",
    places: [
      {
        placeId: 1101,
        name: "阿雪小吃部",
        regularHours: {
          monday: [
            {open: "11:00", close: "14:30"},
            {open: "16:00", close: "20:30"}
          ],
          tuesday: [
            {open: "11:00", close: "14:30"},
            {open: "16:00", close: "20:30"}
          ],
          wednesday: [
            {open: "11:00", close: "14:30"},
            {open: "16:00", close: "20:30"}
          ],
          thursday: [
            {open: "11:00", close: "14:30"},
            {open: "16:00", close: "20:30"}
          ],
          friday: [
            {open: "11:00", close: "14:30"},
            {open: "16:00", close: "20:30"}
          ],
          saturday: {open: null, close: null},
          sunday: [
            {open: "11:00", close: "14:30"},
            {open: "16:00", close: "20:30"}
          ],
        },
      },
      {
        placeId: 1102,
        name: "元福燒肉飯",
        regularHours: {
          monday: {open: "11:00", close: "19:30"},
          tuesday: {open: "11:00", close: "19:30"},
          wednesday: {open: "11:00", close: "19:30"},
          thursday: {open: "11:00", close: "19:30"},
          friday: {open: "11:00", close: "19:30"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 1103,
        name: "北港蔡三代筒仔米糕",
        regularHours: {
          monday: {open: "13:30", close: "21:30"},
          tuesday: {open: "13:30", close: "21:30"},
          wednesday: {open: null, close: null},
          thursday: {open: "13:30", close: "21:30"},
          friday: {open: "13:30", close: "21:30"},
          saturday: {open: "13:30", close: "21:30"},
          sunday: {open: "13:30", close: "21:30"},
        },
      },
      {
        placeId: 1104,
        name: "媽媽的手藝 鴨肉飯麵",
        regularHours: {
          monday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "19:30"}
          ],
          tuesday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "19:30"}
          ],
          wednesday: {open: null, close: null},
          thursday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "19:30"}
          ],
          friday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "19:30"}
          ],
          saturday: {open: null, close: null},
          sunday: [
            {open: "11:00", close: "15:00"},
            {open: "16:00", close: "19:30"}
          ],
        },
      },
      {
        placeId: 1105,
        name: "御典茶",
        regularHours: {
          monday: {open: "11:00", close: "22:00"},
          tuesday: {open: "11:00", close: "22:00"},
          wednesday: {open: "11:00", close: "22:00"},
          thursday: {open: "11:00", close: "22:00"},
          friday: {open: "11:00", close: "22:00"},
          saturday: {open: "11:00", close: "22:00"},
          sunday: {open: "11:00", close: "22:00"},
        },
      },
      {
        placeId: 1106,
        name: "樂魚酸奶",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "11:00", close: "21:00"},
          wednesday: {open: "11:00", close: "21:00"},
          thursday: {open: "11:00", close: "21:00"},
          friday: {open: "11:00", close: "21:00"},
          saturday: {open: "11:00", close: "21:00"},
          sunday: {open: "11:00", close: "21:00"},
        },
      },
      {
        placeId: 1107,
        name: "Shoreline Coffee & Roaster｜海岸線咖啡_西灣店",
        regularHours: {
          monday: {open: "11:00", close: "18:00"},
          tuesday: {open: "11:00", close: "18:00"},
          wednesday: {open: "11:00", close: "18:00"},
          thursday: {open: "11:00", close: "18:00"},
          friday: {open: "11:00", close: "18:00"},
          saturday: {open: "11:00", close: "18:00"},
          sunday: {open: "11:00", close: "18:00"},
        },
      },
      {
        placeId: 1108,
        name: "鹽埕埔(駁二)小夜市",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: null, close: null},
          wednesday: {open: null, close: null},
          thursday: {open: null, close: null},
          friday: {open: null, close: null},
          saturday: {open: "17:30", close: "22:30"},
          sunday: {open: null, close: null},
        },
      },
    ]
  },
  {
    universityId: 12,
    name: "國立中正大學",
    places: [
      {
        placeId: 1201,
        name: "阮氏料理",
        regularHours: {
          monday: [
            {open: "10:30", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          tuesday: [
            {open: "10:30", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          wednesday: [
            {open: "10:30", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          thursday: [
            {open: "10:30", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          friday: [
            {open: "10:30", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
          saturday: {open: null, close: null},
          sunday: [
            {open: "10:30", close: "14:00"},
            {open: "16:30", close: "19:30"}
          ],
        },
      },
      {
        placeId: 1202,
        name: "松阪家日式料理",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: null, close: null},
          wednesday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "21:00"}
          ],
          thursday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "21:00"}
          ],
          friday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "21:00"}
          ],
          saturday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "21:00"}
          ],
          sunday: [
            {open: "11:00", close: "13:30"},
            {open: "17:00", close: "21:00"}
          ],
        },
      },
      {
        placeId: 1203,
        name: "龍座鐵板燒",
        regularHours: {
          monday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "21:30"}
          ],
          tuesday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "21:30"}
          ],
          wednesday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "21:30"}
          ],
          thursday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "21:30"}
          ],
          friday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "21:30"}
          ],
          saturday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "21:30"}
          ],
          sunday: [
            {open: "11:00", close: "14:00"},
            {open: "16:30", close: "21:30"}
          ],
        },
      },
      {
        placeId: 1204,
        name: "牛筋伯爵",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "21:00"}
          ],
          wednesday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "21:00"}
          ],
          thursday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "21:00"}
          ],
          friday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "21:00"}
          ],
          saturday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "21:00"}
          ],
          sunday: [
            {open: "11:00", close: "14:00"},
            {open: "17:00", close: "21:00"}
          ],
        },
      },
      {
        placeId: 1205,
        name: "花亭壽司專賣店",
        regularHours: {
          monday: [
            {open: "11:00", close: "14:30"},
            {open: "16:30", close: "20:30"}
          ],
          tuesday: {open: null, close: null},
          wednesday: [
            {open: "11:00", close: "14:30"},
            {open: "16:30", close: "20:30"}
          ],
          thursday: [
            {open: "11:00", close: "14:30"},
            {open: "16:30", close: "20:30"}
          ],
          friday: [
            {open: "11:00", close: "14:30"},
            {open: "16:30", close: "20:30"}
          ],
          saturday: [
            {open: "11:00", close: "14:30"},
            {open: "16:30", close: "20:30"}
          ],
          sunday: [
            {open: "11:00", close: "14:30"},
            {open: "16:30", close: "20:30"}
          ],
        },
      },
      {
        placeId: 1206,
        name: "Long Stay現泡茶",
        regularHours: {
          monday: {open: "10:00", close: "21:00"},
          tuesday: {open: "10:00", close: "21:00"},
          wednesday: {open: "10:00", close: "21:00"},
          thursday: {open: "10:00", close: "21:00"},
          friday: {open: "10:00", close: "21:00"},
          saturday: {open: "10:00", close: "21:00"},
          sunday: {open: "10:00", close: "21:00"},
        },
      },
      {
        placeId: 1207,
        name: "慢靈魂",
        regularHours: {
          monday: {open: "10:00", close: "19:00"},
          tuesday: {open: null, close: null},
          wednesday: {open: "10:00", close: "19:00"},
          thursday: {open: "10:00", close: "19:00"},
          friday: {open: "10:00", close: "19:00"},
          saturday: {open: "10:00", close: "19:00"},
          sunday: {open: "10:00", close: "19:00"},
        },
      },
      {
        placeId: 1208,
        name: "Ink Hall.隱客廳",
        regularHours: {
          monday: {open: "11:00", close: "23:59"},
          tuesday: {open: "11:00", close: "23:59"},
          wednesday: {open: "11:00", close: "23:59"},
          thursday: {open: "11:00", close: "23:59"},
          friday: {open: "11:00", close: "23:59"},
          saturday: {open: "11:00", close: "23:59"},
          sunday: {open: "11:00", close: "23:59"},
        },
      },
      {
        placeId: 1209,
        name: "雀拾 Cheers cafe",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: "13:00", close: "18:00"},
          wednesday: {open: "13:00", close: "18:00"},
          thursday: {open: "13:00", close: "18:00"},
          friday: {open: "13:00", close: "18:00"},
          saturday: {open: "13:00", close: "18:00"},
          sunday: {open: "13:00", close: "18:00"},
        },
      },
      {
        placeId: 1210,
        name: "文化路夜市",
        regularHours: {
          monday: {open: "15:30", close: "23:00"},
          tuesday: {open: "15:30", close: "23:00"},
          wednesday: {open: "15:30", close: "23:00"},
          thursday: {open: "15:30", close: "23:00"},
          friday: {open: "15:30", close: "23:00"},
          saturday: {open: "15:30", close: "23:00"},
          sunday: {open: "15:30", close: "23:00"},
        },
      },
      {
        placeId: 1211,
        name: "嘉樂福夜市",
        regularHours: {
          monday: {open: null, close: null},
          tuesday: {open: null, close: null},
          wednesday: {open: null, close: null},
          thursday: {open: "18:00", close: "00:00"},
          friday: {open: "18:00", close: "00:00"},
          saturday: {open: "18:00", close: "00:00"},
          sunday: {open: "18:00", close: "00:00"},
        },
      },
    ]
  },
  {
    universityId: 13,
    name: "輔仁大學",
    places: [
      {
        placeId: 1301,
        name: "名廚鐵板燒",
        regularHours: {
          monday: [
            {open: "11:30", close: "14:30"},
            {open: "17:00", close: "21:30"}
          ],
          tuesday: [
            {open: "11:30", close: "14:30"},
            {open: "17:00", close: "21:30"}
          ],
          wednesday: [
            {open: "11:30", close: "14:30"},
            {open: "17:00", close: "21:30"}
          ],
          thursday: [
            {open: "11:30", close: "14:30"},
            {open: "17:00", close: "21:30"}
          ],
          friday: [
            {open: "11:30", close: "14:30"},
            {open: "17:00", close: "21:30"}
          ],
          saturday: [
            {open: "11:30", close: "14:30"},
            {open: "17:00", close: "21:30"}
          ],
          sunday: [
            {open: "11:30", close: "14:30"},
            {open: "17:00", close: "21:30"}
          ],
        },
      },
      {
        placeId: 1302,
        name: "Danny's Toasties 熱壓吐司",
        regularHours: {
          monday: [
            {open: "7:30", close: "15:00"},
            {open: "16:00", close: "17:30"}
          ],
          tuesday: [
            {open: "7:30", close: "15:00"},
            {open: "16:00", close: "17:30"}
          ],
          wednesday: [
            {open: "7:30", close: "15:00"},
            {open: "16:00", close: "17:30"}
          ],
          thursday: [
            {open: "7:30", close: "15:00"},
            {open: "16:00", close: "17:30"}
          ],
          friday: [
            {open: "7:30", close: "15:00"},
            {open: "16:00", close: "17:30"}
          ],
          saturday: {open: "8:30", close: "14:00"},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 1303,
        name: "輔大興德屏東夜市豆花",
        regularHours: {
          monday: {open: "12:00", close: "23:00"},
          tuesday: {open: "12:00", close: "23:00"},
          wednesday: {open: "12:00", close: "23:00"},
          thursday: {open: "12:00", close: "23:00"},
          friday: {open: "12:00", close: "23:00"},
          saturday: {open: "12:00", close: "23:00"},
          sunday: {open: "15:00", close: "23:00"},
        },
      },
      {
        placeId: 1304,
        name: "芊苡號",
        regularHours: {
          monday: {open: "11:00", close: "19:00"},
          tuesday: {open: "11:00", close: "19:00"},
          wednesday: {open: "11:00", close: "19:00"},
          thursday: {open: "11:00", close: "19:00"},
          friday: {open: "11:00", close: "19:00"},
          saturday: {open: null, close: null},
          sunday: {open: null, close: null},
        },
      },
      {
        placeId: 1305,
        name: "勁牛肉麵",
        regularHours: {
          monday: {open: "11:30", close: "21:00"},
          tuesday: {open: "11:30", close: "21:00"},
          wednesday: {open: "11:30", close: "21:00"},
          thursday: {open: "11:30", close: "21:00"},
          friday: {open: "11:30", close: "21:00"},
          saturday: {open: null, close: null},
          sunday: {open: "11:30", close: "21:00"},
        },
      },
      {
        placeId: 1306,
        name: "果汁霸",
        regularHours: {
          monday: {open: "11:00", close: "20:00"},
          tuesday: {open: "11:00", close: "20:00"},
          wednesday: {open: "11:00", close: "20:00"},
          thursday: {open: "11:00", close: "20:00"},
          friday: {open: "11:00", close: "20:00"},
          saturday: {open: "11:00", close: "17:00"},
          sunday: {open: "16:00", close: "20:00"},
        },
      },
      {
        placeId: 1307,
        name: "工寓咖啡 café industry",
        regularHours: {
          monday: {open: "11:00", close: "21:00"},
          tuesday: {open: "11:00", close: "21:00"},
          wednesday: {open: "11:00", close: "21:00"},
          thursday: {open: "11:00", close: "21:00"},
          friday: {open: "11:00", close: "21:00"},
          saturday: {open: "11:00", close: "21:00"},
          sunday: {open: "11:00", close: "21:00"},
        },
      },
      {
        placeId: 1308,
        name: "Laifu coffee 來福咖啡",
        regularHours: {
          monday: {open: "13:00", close: "19:00"},
          tuesday: {open: null, close: null},
          wednesday: {open: null, close: null},
          thursday: {open: "13:00", close: "19:00"},
          friday: {open: "13:00", close: "19:00"},
          saturday: {open: "11:00", close: "18:00"},
          sunday: {open: "11:00", close: "19:00"},
        },
      },
      {
        placeId: 1309,
        name: "哈姆喫茶",
        regularHours: {
          monday: {open: "12:00", close: "21:00"},
          tuesday: {open: "12:00", close: "21:00"},
          wednesday: {open: "12:00", close: "21:00"},
          thursday: {open: "12:00", close: "21:00"},
          friday: {open: "12:00", close: "21:00"},
          saturday: {open: "13:00", close: "19:00"},
          sunday: {open: "13:00", close: "19:00"},
        },
      },
      {
        placeId: 1310,
        name: "新莊廟街夜市",
        regularHours: {
          monday: {open: "16:00", close: "23:59"},
          tuesday: {open: "16:00", close: "23:59"},
          wednesday: {open: "16:00", close: "23:59"},
          thursday: {open: "16:00", close: "23:59"},
          friday: {open: "16:00", close: "23:59"},
          saturday: {open: "16:00", close: "23:59"},
          sunday: {open: "16:00", close: "23:59"},
        },
      }
    ]
  }
];




function isOpen(place) {
  const now = new Date();
  const dayOfWeek = now.toLocaleString('en-US', { weekday: 'long' }).toLowerCase();
  const currentTime = now.getHours() * 60 + now.getMinutes();


  // 檢查是否為特殊營業日
  const regularHours = place.regularHours[dayOfWeek];
  if (!regularHours || regularHours.length === 0 || regularHours.open === null || regularHours.close === null) {
      return "今日休息";
    }



  // 處理多段營業時間或單段營業時間
  const intervals = Array.isArray(regularHours) ? regularHours : [regularHours];
  for (const interval of intervals) {
    const openTime = toMinutes(interval.open);
    const closeTime = toMinutes(interval.close);
    if (currentTime >= openTime && currentTime < closeTime) {
      return "營業中";
    }
  }

  return "已打烊";
}

// 時間字串轉為分鐘
function toMinutes(timeStr) {
  const [hours, minutes] = timeStr.split(':').map(Number);
  return hours * 60 + minutes;
}




app.get('/api/example', (req, res) => {
  res.json({ message: '成功啟用 CORS！' });
});


app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/api/universities/:universityId/places/:placeId/status', (req, res) => {
  const universityId = parseInt(req.params.universityId);
  const placeId = parseInt(req.params.placeId);


  // 查找對應的大學和餐廳
  const university = universitiesData.find(u => u.universityId === universityId);
  if (!university) return res.status(404).json({ message: "大學不存在" });

  const place = university.places.find(p => p.placeId === placeId);
  if (!place) return res.status(404).json({ message: "餐廳不存在" });

  // 判斷餐廳的營業狀態
  const status = isOpen(place);
  res.json({ name: place.name, status });
});


app.listen(port, () => {
  console.log(`API 伺服器運行於 http://localhost:${port}`);
});

