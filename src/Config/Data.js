import { female1, female2, female3, female4, male1, male2, male3, male4, stats1, stats2, userImage } from "../Assets/images";

export const currentUser = {
    image: userImage,
    name: "Mark Carson",
    email: "abc@xyz.com"
}
export const stats = [
    {
        id: 1,
        image: stats1,
        number: "100",
        text: "TOTAL USERS",
        change: "100",
        increase: true,
        totalPost: "Since last week"
    },
    {
        id: 2,
        image: stats2,
        number: "22",
        text: "TOTAL POSTS",
        change: "100",
        increase: true,
        totalPost: "Since last week"
    },
]

export const UserData = [
    {
        id: 1,
        srNo:"01",
        image: userImage,
        status: true,
        gender: "Male",
        username: "john.doe",
        email: "john@email.com",
        phone: "+1-123-456-789",
        registered: "08/10/2022",
        age: "25",
    },
    {
        id: 2,
        srNo:"02",
        image: userImage,
        status: true,
        gender: "Male",
        username: "mark.jason",
        email: "mark@email.com",
        phone: "+1-321-666-789",
        registered: "02/10/2022",
        age: "24",
        location: "Xyz address",
    },
    {
        id: 3,
        srNo:"03",
        image: userImage,
        status: 'In-Active',
        gender: "Male",
        username: "mike.roy",
        email: "mikeroy@email.com",
        phone: "+1-525-864-125",
        registered: "26/09/2022",
        age: "27",
    },
    {
        id: 4,
        srNo:"04",
        status: true,
        image: userImage,
        gender: "Male",
        username: "byers.will",
        email: "will@email.com",
        phone: "+1-985-999-625",
        registered: "22/09/2022",
        age: "19",
    },
    {
        id: 5,
        srNo:"05",
        status: 'In-Active',
        image: userImage,
        gender: "Male",
        username: "isidro",
        email: "isidro@email.com",
        registered: "22/09/2022",
        phone: "+1-206-396-1973",
    },
    {
        id: 6,
        srNo:"06",
        status: true,
        image: userImage,
        gender: "Male",
        username: "james.doe",
        email: "james.doe@email.com",
        phone: "+1-984-456-987",
        registered: "18/09/2022",
        age: "20",
    },
];
export const PostLogs = [
    {
        id: 1,
        user:{
            id: 1,
            srNo:"01",
            image: userImage,
            status: true,
            gender: "Male",
            username: "john.doe",
            email: "john@email.com",
            phone: "+1-123-456-789",
            registered: "08/10/2022",
            age: "25",
        },
        username: "joe denly",
        phone: "+1-123-456-799",
        post:"dummy post",
        time: "01 sec ago",
        likes:["joy", "messi","cristiano","benzima"],
        comments:["joy", "messi","cristiano","benzima"],
        shares:["joy", "messi","cristiano","benzima"],  
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore"
    },
    {
        id: 2,
        user:{
            id: 2,
            srNo:"02",
            image: userImage,
            status: true,
            gender: "Male",
            username: "mark.jason",
            email: "mark@email.com",
            phone: "+1-321-666-789",
            registered: "02/10/2022",
            age: "24",
            location: "Xyz address",
        },
        username: "kemron",
        phone: "+1-123-456-799",
        post:"dummy post",
        time: "02 hours ago",
        likes:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],
        comments:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],
        shares:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],  
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore"
    },
    {
        id: 3,
        user:{
            id: 3,
            srNo:"03",
            image: userImage,
            status: false,
            gender: "Male",
            username: "mike.roy",
            email: "mikeroy@email.com",
            phone: "+1-525-864-125",
            registered: "26/09/2022",
            age: "27",
        },
        username: "sergio aguero",
        phone: "+1-123-456-799",
        post:"dummy post",
        time: "02 hours ago",
        likes:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],
        comments:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],
        shares:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],  
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore"
    },
    {
        id: 4,
        user:{
            id: 4,
            srNo:"04",
            status: true,
            image: userImage,
            gender: "Male",
            username: "byers.will",
            email: "will@email.com",
            phone: "+1-985-999-625",
            registered: "22/09/2022",
            age: "90",
        },
        username: "paul pogba",
        phone: "+1-111-456-799",
        post:"dummy post",
        time: "02 hours ago",
        likes:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","messi","cristiano","benzima"],
        comments:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],
        shares:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],  
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore"
    },
    {
        id:5,
        user:{
            id: 5,
            srNo:"05",
            status: false,
            image: userImage,
            gender: "Male",
            username: "isidro",
            email: "isidro@email.com",
            registered: "22/09/2022",
            phone: "+1-206-396-1973",
        },
        username: "thiago silva",
        phone: "+1-999-456-799",
        post:"dummy post",
        time: "02 hours ago",
        likes:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","messi","cristiano","benzima"],
        comments:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],
        shares:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],  
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore"
    },
    {
        id:6,
        user:{
        id: 6,
        srNo:"06",
        status: true,
        image: userImage,
        gender: "Male",
        username: "james.doe",
        email: "james.doe@email.com",
        phone: "+1-984-456-987",
        registered: "18/09/2022",
        age: "20",
        },
        username: "thiago silva",
        phone: "+1-999-456-799",
        post:"dummy post",
        time: "02 hours ago",
        likes:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","messi","cristiano","benzima","joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","messi","cristiano","benzima"],
        comments:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],
        shares:["joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima","joy", "messi","cristiano","benzima"],  
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore consectetur adipiscing elit. Aenean euismod bibendum laore"
    } 
];
// export const femaleApplicants = [
//     {
//         id: 1,
//         image: female1,
//         name: "Ogasawara Katsumi",
//         username: "ogasawara.katsumi",
//         email: "ogasawara@email.com",
//         phone: "+1-123-456-789",
//         age: "25",
//         location: "Abc address",
//         about:
//             "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
//         interest: ["Swimming", "Movies", "Nightout"],
//         price: "20",
//     },
//     {
//         id: 2,
//         image: female2,
//         name: "Stepan Assonov",
//         username: "stepan.assonov",
//         email: "stepan@email.com",
//         phone: "+1-321-666-789",
//         age: "24",
//         location: "Xyz address",
//         about:
//             "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing.",
//         interest: ["Reading", "Movies", "Painting"],
//         price: "30",
//     },
//     {
//         id: 3,
//         image: female3,
//         name: "Lucas Pacheco",
//         username: "lucas.pacheco",
//         email: "Lucas@email.com",
//         phone: "+1-525-864-125",
//         age: "27",
//         location: "Abc street address",
//         about:
//             "simply dummy text of printing & typesetting industry of printing & typesetting industry.",
//         interest: ["Football", "Rafting", "Nightout"],
//         price: "20",
//     },
//     {
//         id: 4,
//         image: female4,
//         name: " Marco Alves",
//         username: "marco.alves",
//         email: "marco.alves@email.com",
//         phone: "+1-985-999-625",
//         age: "19",
//         location: "Xyz address",
//         about:
//             "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
//         interest: ["Painting", "Writing", "Gaming"],
//         price: "15",
//     },
//     {
//         id: 5,
//         image: female2,
//         name: "Mbe Tshinguta",
//         username: "tshinguta",
//         email: "mbe.tshinguta@email.com",
//         phone: "+1-206-396-1973",
//         age: "31",
//         location: "Abc address",
//         about:
//             "Lorem Ipsum is text of printing & typesetting industry of printing & typesetting industry.",
//         interest: ["Shooting", "Baseball", "Boxing"],
//         price: "10",
//     },
//     {
//         id: 6,
//         image: female3,
//         name: "Okasawara Karsumi",
//         username: "okasawara.karsumi",
//         email: "okasawara@email.com",
//         phone: "+1-984-456-987",
//         registered: "18/09/2022",
//         age: "20",
//         location: "Abc address",
//         about:
//             "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
//         interest: ["Swimming", "Gaming", "Movies", "Surfing"],
//         price: "25",
//     },
// ];

export const commissionLogs = [
    {
        id: 1,
        oldCommission: 15,
        newCommission: 20,
        updatedDate: "10/05/2022",
        effectiveDate: "15/05/2022"
    },
    {
        id: 2,
        oldCommission: 20,
        newCommission: 12,
        updatedDate: "05/02/2022",
        effectiveDate: "22/02/2022"
    },
    {
        id: 3,
        oldCommission: 12,
        newCommission: 15,
        updatedDate: "10/01/2022",
        effectiveDate: "20/01/2022"
    },
    {
        id: 4,
        oldCommission: 15,
        newCommission: 18,
        updatedDate: "19/11/2021",
        effectiveDate: "30/11/2021"
    },
    {
        id: 5,
        oldCommission: 18,
        newCommission: 12,
        updatedDate: "10/10/2021",
        effectiveDate: "20/10/2021"
    },
    {
        id: 6,
        oldCommission: 12,
        newCommission: 15,
        updatedDate: "16/07/2021",
        effectiveDate: "02/08/2021"
    },
];
export const feedbacks = [
    {
        id: 1,
        user: {
            id: 1,
            status: true,
            srno:"01",
            name: "John Doe",
            username: "john.doe",
            email: "john@email.com",
            phone: "+1-123-456-789",
            registered: "08/10/2022",
            location: "Abc address",
        },
        subject: "Abc",
        message: "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
        date: "19/12/2022"
    },
    {
        id: 2,
        user: {
            id: 3,
            status: false,
            srno:"02",
            name: "Mike Roy",
            username: "mike.roy",
            email: "mikeroy@email.com",
            phone: "+1-525-864-125",
            about:
                "simply dummy text of printing & typesetting industry of printing & typesetting industry.",
        },
        subject: "Xyz",
        message: "Lorem Ipsum is text of printing & typesetting industry of printing & typesetting industry.",
        date: "01/12/2022"
    },
    {
        id: 3,
        user: {
            id: 4,
            status: true,
            srno:"03",
            name: " Marco Alves",
            username: "marco.alves",
            email: "marco.alves@email.com",
            phone: "+1-985-999-625",
            price: "15",
            commission: "10",
        },
        subject: "Abc Subject",
        message: "Lorem text of printing & typesetting industry of printing & typesetting industry.",
        date: "22/11/2022"
    },
    {
        id: 4,
        user: {
            id: 1,
            status: true,
            srno:"04",
            image: male1,
            gender: "Male",
            name: "John Doe",
            username: "john.doe",
            email: "john@email.com",
            phone: "+1-123-456-789",
            registered: "08/10/2022",
            age: "25",
            location: "Abc address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
        },
        subject: "Xyz Subject",
        message: "Lorem Ipsum is text of printing & typesetting industry of printing.",
        date: "11/11/2022"
    },
    {
        id: 5,
        user: {
            id: 2,
            status: true,
            srno:"05",
            image: female2,
            gender: "Female",
            name: "Stepan Assonov",
            username: "stepan.assonov",
            email: "stepan@email.com",
            phone: "+1-321-666-789",
            registered: "02/10/2022",
            age: "24",
            location: "Xyz address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing.",
        },
        subject: "Abc 123 Subject",
        message: "Lorem Ipsum is text of printing & typesetting industry of printing & typesetting industry.",
        date: "29/09/2022"
    },
];
export const reports = [
    {
        id: 1,
        user: {
            id: 1,
            image: female1,
            name: "Ogasawara Katsumi",
            username: "ogasawara.katsumi",
            email: "ogasawara@email.com",
            phone: "+1-123-456-789",
            age: "25",
            location: "Abc address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
            interest: ["Swimming", "Movies", "Nightout"],
            price: "20",
        },
        reportedUser: {
            id: 2,
            status: true,
            image: male2,
            gender: "Male",
            name: "Mark Jason",
            username: "mark.jason",
            email: "mark@email.com",
            phone: "+1-321-666-789",
            registered: "02/10/2022",
            age: "24",
            location: "Xyz address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing.",
            interest: ["Reading", "Movies", "Painting"],
        },
        reason: "Lorem dummy text of printing & typesetting industry of printing & typesetting industry.",
        date: "16/12/2022",
    },
    {
        id: 2,
        user: {
            id: 4,
            status: true,
            image: female4,
            gender: "Female",
            name: " Marco Alves",
            username: "marco.alves",
            email: "marco.alves@email.com",
            phone: "+1-985-999-625",
            registered: "22/09/2022",
            age: "19",
            location: "Xyz address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
            interest: ["Painting", "Writing", "Gaming"],
            price: "15",
            commission: "10",
        },
        reportedUser: {
            id: 5,
            status: false,
            image: male2,
            gender: "Male",
            name: "Isidro Haris",
            username: "isidro",
            email: "isidro@email.com",
            phone: "+1-206-396-1973",
            registered: "22/09/2022",
            age: "31",
            location: "Abc address",
            about:
                "Lorem Ipsum is text of printing & typesetting industry of printing & typesetting industry.",
            interest: ["Shooting", "Baseball", "Boxing"],
        },
        reason: "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
        date: "15/12/2022",
    },
    {
        id: 3,
        user: {
            id: 1,
            image: female1,
            name: "Ogasawara Katsumi",
            username: "ogasawara.katsumi",
            email: "ogasawara@email.com",
            phone: "+1-123-456-789",
            age: "25",
            location: "Abc address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
            interest: ["Swimming", "Movies", "Nightout"],
            price: "20",
        },
        reportedUser: {
            id: 2,
            status: true,
            image: male2,
            gender: "Male",
            name: "Mark Jason",
            username: "mark.jason",
            email: "mark@email.com",
            phone: "+1-321-666-789",
            registered: "02/10/2022",
            age: "24",
            location: "Xyz address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing.",
            interest: ["Reading", "Movies", "Painting"],
        },
        reason: "Text of printing & typesetting industry of printing & typesetting industry.",
        date: "02/12/2022",
    },
    {
        id: 4,
        user: {
            id: 6,
            status: true,
            image: female3,
            gender: "Female",
            name: "Okasawara Karsumi",
            username: "okasawara.karsumi",
            email: "okasawara@email.com",
            phone: "+1-984-456-987",
            registered: "18/09/2022",
            age: "20",
            location: "Abc address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
            interest: ["Swimming", "Gaming", "Movies", "Surfing"],
            price: "25",
            commission: "13",
        },
        reportedUser: {
            id: 2,
            status: true,
            image: male2,
            gender: "Male",
            name: "Mark Jason",
            username: "mark.jason",
            email: "mark@email.com",
            phone: "+1-321-666-789",
            registered: "02/10/2022",
            age: "24",
            location: "Xyz address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing.",
            interest: ["Reading", "Movies", "Painting"],
        },
        reason: "Lorem Ipsum is simply dummy text of printing industry.",
        date: "22/11/2022",
    },
    {
        id: 5,
        user: {
            id: 1,
            status: true,
            image: female1,
            gender: "Female",
            name: "Ogasawara Katsumi",
            username: "ogasawara.katsumi",
            email: "ogasawara@email.com",
            phone: "+1-123-456-789",
            registered: "08/10/2022",
            age: "25",
            location: "Abc address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
            interest: ["Swimming", "Movies", "Nightout"],
            price: "20",
            commission: "10",
        },
        reportedUser: {
            id: 5,
            status: false,
            image: male2,
            gender: "Male",
            name: "Isidro Haris",
            username: "isidro",
            email: "isidro@email.com",
            phone: "+1-206-396-1973",
            registered: "22/09/2022",
            age: "31",
            location: "Abc address",
            about:
                "Lorem Ipsum is text of printing & typesetting industry of printing & typesetting industry.",
            interest: ["Shooting", "Baseball", "Boxing"],
        },
        reason: "Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
        date: "13/11/2022",
    },
    {
        id: 6,
        user: {
            id: 2,
            status: true,
            image: female2,
            gender: "Female",
            name: "Stepan Assonov",
            username: "stepan.assonov",
            email: "stepan@email.com",
            phone: "+1-321-666-789",
            registered: "02/10/2022",
            age: "24",
            location: "Xyz address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing.",
            interest: ["Reading", "Movies", "Painting"],
            price: "30",
            commission: "20",
        },
        reportedUser: {
            id: 2,
            status: true,
            image: male2,
            gender: "Male",
            name: "Mark Jason",
            username: "mark.jason",
            email: "mark@email.com",
            phone: "+1-321-666-789",
            registered: "02/10/2022",
            age: "24",
            location: "Xyz address",
            about:
                "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing.",
            interest: ["Reading", "Movies", "Painting"],
        },
        reason: "Lorem Ipsum is simply dummy text of printing & typesetting industry of printing & typesetting industry.",
        date: "06/11/2022",
    },
];

export const notifications = [
    {
        id: 1,
        image: userImage,
        name:"Sarah Micheal",
        text:"added your photos to favorites.",
        date: "01/01/2022",
        time: "01 sec ago",
        unread: true,
    },
    {
        id: 2,
        image: userImage,
        name:"Lional Micheal",
        text:"added your photos to favorites.",
        date: "01/01/2022",
        time: "01 sec ago",
        unread: true,
    },
    {
        id: 3,
        image: userImage,
        name:"Lional Micheal",
        text:"added your photos to favorites.",
        date: "01/01/2022",
        time: "01 sec ago",
        unread: false,
    },
    {
        id: 4,
        image: userImage,
        name:"pollard",
        text:"added your photos to favorites.",
        date: "01/01/2022",
        time: "01 sec ago",
        unread: false,
    },
    {
        id: 5,
        image: userImage,
        name:"John Doe",
        text:"added your photos to favorites.",
        date: "01/01/2022",
        time: "01 sec ago",
        unread: false,
    },
    {
        id: 6,
        image: userImage,
        name:"Coweressel",
        text:"added your photos to favorites.",
        date: "01/01/2022",
        time: "01 sec ago",
        unread: false,
    },
    {
        id: 7,
        image: userImage,
        name:"Calvin L. Leger",
        text:"added your photos to favorites.",
        date: "01/01/2022",
        time: "01 sec ago",
        unread: false,
    },
];