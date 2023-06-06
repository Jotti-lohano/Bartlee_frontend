// import { ProfilePic } from '../../Assets'
import { images } from '../../Assets';

export const businessManag = [
  {
    id: 1,
    fname: 'Tommy',
    lname: 'Chris',
    email: 'abc@example.com',
    type: 'Clothing',
    registered: 'Sept 24, 2022',
    companyName: 'Abc Company',
    website: 'ABC.com',
    status: 'Active',
    pic: <img src={images.ProfilePic} alt="" className="img-fluid" />,
    tagline: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    fname: 'Knill',
    lname: 'Chris',
    email: 'abc@example.com',
    type: 'Clothing',
    registered: 'Sept 24, 2022',
    companyName: 'Abc Company',
    website: 'ABC.com',
    status: 'Inactive',
    pic: <img src={images.ProfilePic} alt="" className="img-fluid" />,
    tagline: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    fname: 'Ross',
    lname: 'Chris',
    email: 'abc@example.com',
    type: 'Clothing',
    registered: 'Sept 24, 2022',
    companyName: 'Abc Company',
    website: 'ABC.com',
    status: 'Active',
    pic: <img src={images.ProfilePic} alt="" className="img-fluid" />,
    tagline: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export const businessType = [
  {
    id: 1,
    type: 'Clothing',
    status: 'Active',
  },
  {
    id: 2,
    type: 'Restaurant',
    status: 'Active',
  },
  {
    id: 3,
    type: 'Bar',
    status: 'Active',
  },
  {
    id: 4,
    type: 'Hotel',
    status: 'Active',
  },
];

export const artistManag = [
  {
    id: 1,
    fname: 'Marson',
    lname: 'Albert',
    email: 'abc@example.com',
    skill: 'Singer',
    registered: 'Sept 24, 2022',
    companyName: 'Abc Company',
    website: 'ABC.com',
    status: 'Active',
    pic: <img src={images.ProfilePic} alt="" className="img-fluid" />,
    tagline: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    experience: 2,
    gender: 'Femail',
    country: 'Newyork',
    city: 'Texas',
    contact: '000000000000',
    address: 'ABCDEFGHIJK',
    something: 'ABCDEFGHIJK',
  },
  {
    id: 2,
    fname: 'Knill',
    lname: 'Chris',
    email: 'abc@example.com',
    skill: 'Painter',
    registered: 'Sept 24, 2022',
    companyName: 'Abc Company',
    website: 'ABC.com',
    status: 'Inactive',
    pic: <img src={images.ProfilePic} alt="" className="img-fluid" />,
    tagline: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    experience: 2,
    gender: 'Femail',
    country: 'Newyork',
    city: 'Texas',
    contact: '000000000000',
    address: 'ABCDEFGHIJK',
    imgVideo: [images.imgvideo, images.imgvideo, images.imgvideo],
    something: 'ABCDEFGHIJK',
    // imgVideo: <img src={images.imgvideo} alt="" className="img-fluid" />,
  },
  {
    id: 3,
    fname: 'Ross',
    lname: 'Chris',
    email: 'abc@example.com',
    skill: 'Actor',
    registered: 'Sept 24, 2022',
    companyName: 'Abc Company',
    website: 'ABC.com',
    status: 'Active',
    pic: <img src={images.ProfilePic} alt="" className="img-fluid" />,
    tagline: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    experience: 2,
    gender: 'Femail',
    country: 'Newyork',
    city: 'Texas',
    contact: '000000000000',
    address: 'ABCDEFGHIJK',
    something: 'ABCDEFGHIJK',
  },
];


export const paymentLogs = [
  {
    id: 1,
    name: 'Abcd',
    totalAmount: '$15.00',
    recievedOn: 'Aug 28, 2022',
  },
  {
    id: 2,
    name: 'Abcd',
    totalAmount: '$25.00',
    recievedOn: 'Oct 04, 2022',
  },
  {
    id: 3,
    name: 'Abcd',
    totalAmount: '$30.00',
    recievedOn: 'Sept 25, 2022',
  },
];

export const feedbacks = [
  {
    id: 1,
    name: 'Abcd',
    email: 'abc@example.com',
    date: 'Sept 24, 2022',
    subject: 'Problem',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    id: 2,
    name: 'Abcd',
    email: 'abc@example.com',
    date: 'Sept 24, 2022',
    subject: 'Problem',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
  {
    id: 3,
    name: 'Abcd',
    email: 'abc@example.com',
    date: 'Sept 24, 2022',
    subject: 'Problem',
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  },
];


export const pushNotifications = [
  {
    id: 1,
    title: 'Abcd',
    datesent: 'Sept 24, 2022',
  },
  {
    id: 2,
    title: 'Abcd',
    datesent: 'Sept 2, 2022',
  },
  {
    id: 3,
    title: 'Abcd',
    datesent: 'Sept 4, 2022',
  },
];


export const notifications = [
  {
      id: 1,
      text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "Dec 19, 2022",
      time: "02:00 PM",
      
  },
  {
      id: 2,
      text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
      date: "Dec 19, 2022",
      time: "01:40 PM",
      
  },
  {
      id: 3,
      text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      date: "Dec 19, 2022",
      time: "02:00 PM",
  
  },
  {
      id: 4,
      text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
      date: "Dec 19, 2022",
      time: "01:40 PM",
    
  },
  {
      id: 5,
      text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
      date: "Dec 19, 2022",
      time: "01:40 PM",
    
  },
  {
      id: 6,
      text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
      date: "Dec 19, 2022",
      time: "01:40 PM",
    
  },
  {
      id: 7,
      text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry and typesetting industry.",
      date: "Dec 19, 2022",
      time: "01:40 PM",
    
  },
];



export const profiledata = {
    name: "Mark Carson",
    profilePicUser: images.ProfilePic,
    email: "marsonalbert@gmail.com",
    contactNum: "+0987654320"
  }


