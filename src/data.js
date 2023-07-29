

const myData = [
    {
      name: "Aries",
      img: "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/c1aa1b051d402cccbe7ae9ce5a697259&w=750",
      id: 1,
      date: "March 21 - April 19",
      symbol: "♈︎",
      detail: "Aries individuals have an energetic, courageous, and determined personality. They are natural-born leaders and thrive in competitive environments. They have a strong desire to achieve their goals and are not afraid to take risks to get there. However, they can also be impulsive and impatient at times. Aries people are known for their passion and enthusiasm, and they approach life with a zest that inspires those around them."
    },
    {
      name: "Taurus",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/a0161c85b99d3cff6e4107f5fc1e86c6&w=200",
      id: 2,
      date: "April 20 - May 20",
      symbol: "♉︎",
      detail: "Taurus individuals have a patient, reliable, and practical personality. They are known for their strong determination and unwavering loyalty. Taurus people value stability and security, and they work hard to create a comfortable and harmonious environment for themselves and their loved ones. They have a deep appreciation for beauty and the finer things in life, and they often have a strong connection to nature. Taurus individuals are dependable and trustworthy, making them excellent friends and partners."
    },
    {
      name: "Gemini",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/384960dc716d4a6ee3c810ed165a60e6&w=750",
      id: 3,
      date: "May 21 - June 20",
      symbol: "♊︎",
      detail: "Gemini individuals are known for their versatility, curiosity, and adaptability. They have a dual nature and can easily switch between different interests and roles. Gemini people are excellent communicators and are often the life of the party. They have a quick wit and are skilled at navigating social situations. However, they can also be restless and indecisive at times. Gemini individuals are intellectual and love to learn new things, making them great conversationalists and always up for a stimulating discussion."
    },
    {
      name: "Cancer",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/2ca905d540012c34ce7534a1ec8fa187&w=750",
      id: 4,
      date: "June 21 - July 22",
      symbol: "♋︎",
      detail: "Cancer individuals are known for their deep emotional sensitivity and intuition. They are nurturing, compassionate, and highly protective of their loved ones. Cancer people value their home and family life, and they create a safe and secure environment for themselves and their loved ones. They have a strong connection to their emotions and are often highly intuitive. Cancer individuals can be deeply empathetic and are natural caretakers, always ready to lend a helping hand to those in need."
    },
    {
      name: "Leo",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/63bc7e31fc439157ea986ed78036e8a1&w=750",
      id: 5,
      date: "July 23 - August 22",
      symbol: "♌︎",
      detail: "Leo individuals have a confident, generous, and charismatic personality. They are natural-born leaders and love to be in the spotlight. Leo people have a strong sense of self-worth and take pride in their accomplishments. They are passionate and enthusiastic, and their warm and radiant energy attracts others to them. Leo individuals have a creative flair and enjoy expressing themselves through various forms of art and entertainment. They are loyal friends and partners who will always stand by their loved ones."
    },
    {
      name: "Virgo",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/2821cc59dbd1fdf85d296b70c3a4eaf1&w=200",
      id: 6,
      date: "August 23 - September 22",
      symbol: "♍︎",
      detail: "Virgo individuals have a practical, analytical, and detail-oriented personality. They have a keen eye for perfection and strive for excellence in everything they do. Virgo people are highly organized and efficient, and they pay attention to the smallest of details. They have a strong work ethic and are dedicated to their responsibilities. Virgo individuals can be reserved and introspective, but they are also loyal and supportive friends. They have a natural talent for problem-solving and are always ready to lend a helping hand."
    },
    {
      name: "Libra",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/6b06d3f405c4b6d61d6283faabdaa7c6&w=750",
      id: 7,
      date: "September 23 - October 22",
      symbol: "♎︎",
      detail: "Libra individuals have a balanced, harmonious, and diplomatic personality. They value fairness and justice and strive to create harmony in their relationships and surroundings. Libra people are natural peacemakers and skilled mediators. They have a strong sense of aesthetics and appreciate beauty in all its forms. Libra individuals are social butterflies and enjoy being in the company of others. They have a charm that attracts people to them, and they excel at maintaining harmony and balance in their social interactions."
    },
    {
      name: "Scorpio",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/c5fb14099dc343309b4e04f5334351cf&w=200",
      id: 8,
      date: "October 23 - November 21",
      symbol: "♏︎",
      detail: "Scorpio individuals have an intense, passionate, and mysterious personality. They have a deep emotional depth and are known for their loyalty and determination. Scorpio people are highly intuitive and can easily sense the motives and emotions of others. They have a strong willpower and are not afraid to face challenges head-on. Scorpio individuals are resourceful and resilient, and they have the ability to transform themselves in times of adversity. They are fiercely protective of their loved ones and are not afraid to stand up for what they believe in."
    },
    {
      name: "Sagittarius",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/1f391b5912173023e4a633b7f05a908c&w=750",
      id: 9,
      date: "November 22 - December 21",
      symbol: "♐︎",
      detail: "Sagittarius individuals have an adventurous, optimistic, and free-spirited personality. They have a love for travel, exploration, and learning. Sagittarius people have a philosophical nature and are constantly seeking the truth and meaning of life. They have a great sense of humor and love to have a good time. Sagittarius individuals are independent and value their freedom. They are open-minded and tolerant, and they embrace diversity and different cultures. They have a natural ability to inspire others with their contagious enthusiasm."
    },
    {
      name: "Capricorn",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/5728ec4261b8db4917b4b9fab83457d0&w=750",
      id: 10,
      date: "December 22 - January 19",
      symbol: "♑︎",
      detail: "Capricorn individuals have a practical, disciplined, and ambitious personality. They are known for their strong work ethic and determination to succeed. Capricorn people are highly responsible and reliable, and they take their commitments seriously. They have a natural talent for leadership and are often respected and admired by others. Capricorn individuals are organized and strategic in their approach to life. They value tradition and are not afraid to put in the hard work to achieve their goals. They are loyal and supportive friends and partners."
    },
    {
      name: "Aquarius",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/9c3f571e6c402e18129249a759a6a75f&w=750",
      id: 11,
      date: "January 20 - February 18",
      symbol: "♒︎",
      detail: "Aquarius individuals have an independent, unconventional, and humanitarian personality. They have a strong sense of social justice and are always striving for a better world. Aquarius people are intellectual and value their freedom of thought. They are often ahead of their time and embrace innovation and progress. Aquarius individuals are friendly and sociable, and they enjoy being part of a community. They have a knack for connecting with people from all walks of life and often have a wide circle of friends. They are known for their originality and unique perspective on life."
    },
    {
      name: "Pisces",
      img:"https://www.washingtonpost.com/wp-apps/imrs.php?src=https://www.washingtonpost.com/wp-stat/vg/cabff07f32b5438999eff08201f4c9f1&w=200",
      id: 12,
      date: "February 19 - March 20",
      symbol: "♓︎",
      detail: "Pisces individuals have a compassionate, intuitive, and imaginative personality. They have a deep empathy for others and are highly sensitive to the emotions and needs of those around them. Pisces people are dreamers and often have a rich inner world. They are highly creative and artistic, and they find solace in expressing themselves through various forms of art. Pisces individuals are deeply connected to their emotions and often have a spiritual or mystical side. They are selfless and caring individuals who are always willing to lend a helping hand."
    }
  ];

export default myData;
