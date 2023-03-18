import { collection, doc, getDocs, onSnapshot } from 'firebase/firestore';
import React, { useState, useEffect, useContext } from 'react'
import { db } from '../../firebase';
import home from "../../assets/home.svg"
import message from "../../assets/message.svg"
import search from "../../assets/search.svg"
import settings from "../../assets/settings.svg"
import calendar from "../../assets/calendar.svg"
import Meeting from "../Recruiter/Meeting"
// import { AuthContext } from '../../Contexts/AuthContext';
import MainHeader from './HomeHeader';
import HomeMid from './HomeMid';
import HomeHeader from './HomeHeader';
// import DonationSidebar from '../../components/Donation/DonationSidebar';
// import SponsorSidebar from '../../components/Sponsor/SponsorSidebar';
// import VolunteerSidebar from '../../components/Volunteers/VolunteerSidebar';
// import CampaignSidebar from '../../components/Campaigns/CampaignSidebar';
// import MainMid from './MainMid';

function Recruiter() {
    const [campaignsObj, setCampaignsObj] = useState([])
    const [fetch, setFetch] = useState(false);
    // const { _admin } = useContext(AuthContext);
    const [HOME, SETHOME] = useState(true)
    const [MESSAGE, SETMESSAGE] = useState(false)
    const [CALENDAR, SETCALENDAR] = useState(false)
    const [SETTINGS, SETSETTINGS] = useState(false)
    const [SEARCH, SETSEARCH] = useState(false)


    const data = {

        chartData: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ],
            data: [
                0,
                0,
                0,
                0,
                0,
                0,
                10000, 2000,
                30000, 10000
            ],
        },
    };



    // useEffect(() => {
    //     !_admin ?
    //         router.push("/")
    //         : router.push("/components/AdminPanel");

    //     if (!fetch) {
    //         const fetchCampaignsObj = async () => {
    //             const querySnapshot = await getDocs(collection(db, "campaigns"));
    //             querySnapshot.forEach((doc) => {
    //                 setCampaignsObj((campaignsObj) => [...campaignsObj, { id: doc.id, name: doc.data().name, url: doc.data().url, route: doc.data().route, desc: doc.data().desc }])
    //             }
    //             )
    //         }
    //         fetchCampaignsObj();
    //         setFetch(true)
    //     }


    //     const unsub = onSnapshot(doc(db, "info", "qi1oMnSLTD30gyxViBmG"), (doc) => {
    //         setRevenue(doc.data().revenue)
    //     });

    //     const unsub2 = onSnapshot(doc(db, "info", "qi1oMnSLTD30gyxViBmG"), (doc) => {
    //         setCampaignCount(doc.data().campaigns)
    //     });
    //     const unsub3 = onSnapshot(doc(db, "info", "qi1oMnSLTD30gyxViBmG"), (doc) => {
    //         setDonorCount(doc.data().donors)
    //     });
    //     const unsub4 = onSnapshot(doc(db, "info", "qi1oMnSLTD30gyxViBmG"), (doc) => {
    //         setSponsorCount(doc.data().sponsors)
    //     });
    //     const unsub5 = onSnapshot(doc(db, "info", "qi1oMnSLTD30gyxViBmG"), (doc) => {
    //         setVolunteerCount(doc.data().volunteers)
    //     });
    //     const unsub6 = onSnapshot(doc(db, "info", "qi1oMnSLTD30gyxViBmG"), (doc) => {
    //         set_pickups_completed(doc.data().pickups_completed)
    //     });


    // }, [])


    //     <div className='flex justify-center items-center'>
    //     <div className='grid grid-cols-3 gap-10 ml-20 mr-20 mt-44 pb-20'>

    //         {campaignsObj.map((campaign) => (
    //             <div key={campaign.id} className='flex flex-col justify-center items-center hover:cursor-pointer border-gray-600 border-2'>
    //                 <img className='rounded-t-lg' src={campaign.url} alt={campaign.name} />
    //                 <h1 className='text-3xl font-semibold w-[395px] bg-gray-200 text-gray-800 text-center pt-10 pb-5'>{campaign.name}</h1>
    //                 <h1 className='text-lg font-normal w-[395px] bg-gray-200 text-gray-800 text-center pt-10 pb-5'>{campaign.desc}</h1>
    //             </div>
    //         ))}

    //     </div>
    // </div>

    return (
        <div className='bg-black text-white h-full w-screen flex justify-center items-center font-poppins '>
            {/* Sidebar */}
            <div className='w-28 h-screen flex flex-col items-center space-y-12 bg-gray-900 pt-56'>
                <div onClick={() => {
                    SETHOME(true)
                    SETCALENDAR(false)
                    SETMESSAGE(false)
                    SETSEARCH(false)
                    SETSETTINGS(false)
                }

                } className={`${HOME && ''} w-10 h-10  rounded-full cursor-pointer hover:ease-in-out hover:bg-gray-700 flex justify-center items-center hover:scale-125 hover:duration-200`}>
                    <img src={home} alt="home" width={20} height={20} />
                </div>

                <div onClick={() => {
                    SETHOME(false)
                    SETCALENDAR(false)
                    SETMESSAGE(true)
                    SETSEARCH(false)
                    SETSETTINGS(false)

                }} className='w-10 h-10  cursor-pointer  rounded-full hover:ease-in-out hover:bg-gray-700 flex justify-center items-center hover:scale-125 hover:duration-200'>
                    <img src={search} alt="search" width={20} height={20} />
                </div>
                <div onClick={() => {
                    SETHOME(false)
                    SETCALENDAR(false)
                    SETMESSAGE(true)
                    SETSEARCH(false)
                    SETSETTINGS(false)
                }} className='w-10 h-10  cursor-pointer  rounded-full hover:ease-in-out hover:bg-gray-700 flex justify-center items-center hover:scale-125 hover:duration-200'>
                    <img src={message} alt="message" width={20} height={20} />
                </div>
                <div onClick={() => {
                    SETHOME(false)
                    SETCALENDAR(false)
                    SETMESSAGE(false)
                    SETSEARCH(true)
                    SETSETTINGS(false)

                }} className='w-10 h-10  cursor-pointer rounded-full hover:ease-in-out hover:bg-gray-700 flex justify-center items-center hover:scale-125 hover:duration-200'>
                    <img src={calendar} alt="calendar" width={20} height={20} />
                </div>
                <div onClick={() => {
                    SETHOME(false)
                    SETCALENDAR(false)
                    SETMESSAGE(false)
                    SETSEARCH(false)
                    SETSETTINGS(true)

                }} className='w-10 h-10  cursor-pointer rounded-full hover:ease-in-out hover:bg-gray-700 flex justify-center items-center hover:scale-125 hover:duration-200'>
                    <img src={settings} alt="settings" width={20} height={20} />
                </div>
            </div>
            {/* Main page */}
            {
                HOME && (
                    <>
                        <div className='w-screen  h-screen'>
                            <HomeHeader />
                            {/* <div className='w-[1000px] h-[1px] bg-black mt-4'/> */}
                            <HomeMid />
                            {/* <Meeting /> */}
                        </div>
                    </>
                )
            }

        </div >
    )
}

export default Recruiter