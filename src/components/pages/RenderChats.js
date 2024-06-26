import React, { useState } from "react";
import DashboardLayout from "../dashboard layout/DashboardLayout";
import { FaArrowCircleUp } from "react-icons/fa";
import GptLogo from '../../assets/chatgpt-logo-02AFA704B5-seeklogo.com.png'
import Content from "../dashboard layout/content/Content";
import MobileNavs from "../dashboard layout/sidebar/MobileNavs";
import Sidebar from "../dashboard layout/sidebar/Sidebar";
import Header from "../dashboard layout/header/Header";
import dummyChats from "../../data/ChatsData";

const RenderChats = () => {
    const [open, setopen] = useState(false);
    const [isConversation, setisConversation] = useState(false);
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [chatData, setchatData] = useState(dummyChats);
    const [newMessage, setnewMessage] = useState('');





    const handleSelectChat = (id) => {
        setSelectedChatId(id);
        setisConversation(true)
    };
    // console.log(selectedChatId);
    const selectedChat = chatData.find(chat => chat.id === selectedChatId);
    console.log(chatData);


    const handleNewMessage = () => {
        if (newMessage === "") return; 

        
        setchatData(prevChatData => {
            return prevChatData.map(chat => {
                if (chat.id === selectedChatId) {
                    // Append the new message to the messages array 
                    return {
                        ...chat,
                        messages: [...chat.messages, newMessage]
                    };
                }
                setnewMessage("")
                return chat; 
            });
        });
    };



    return <>
        <DashboardLayout open={open} setopen={setopen}>
            {/* sidebar */}
            <Sidebar open={open} chats={chatData} onSelectChat={handleSelectChat} />
            {open && <MobileNavs open={open} />}
            {/* header */}
            <Header open={open} setopen={setopen} />
            {/* content box */}
            <Content>
                <div className="container  " style={{ height: '100%' }}  >
                    <div className="container" style={{ height: "100%", display: 'flex', flexDirection: 'column' }} >
                        <div className=" prompt-scroll-box " style={{ height: '87%' }} >
                            <div className="scroll-inner ">

                                {!isConversation ? (<div className="flex justify-center items-center flex-col gap-3 py-10 px-6  h-[100%] mx-auto w-[100%] lg:w-[70%]" >
                                    <img className="w-10 h-10 mt-10 lg:mt-20" src={GptLogo} alt="logoo" />
                                    <h1 className="text-2xl font-bold ">Hi! How I can help you today?</h1>
                                    <p className="text-center">Feel free to ask me anything, and I'll do my best to provide you with the information or support you need. Let's get started!</p>  </div>)

                                    :
                                    <div className="h-[100%] px-3 lg:px-0 mx-auto w-[100%] lg:w-[70%]">
                                        {selectedChatId !== null && selectedChat?.messages.map((currElm, i) => (
                                            <div key={i} id={i}>
                                                {i % 2 === 0 ? (
                                                    // User message
                                                    <div className="bg-hover-bg ms-auto w-[100%] lg:w-[60%] mb-5 p-3 rounded-3xl">
                                                        <p>{currElm}</p>
                                                    </div>
                                                ) : (
                                                    // GPT response
                                                    <div className="flex mb-5">
                                                        <img className="flex-shrink-0 w-6 h-6 bg-white p-1 rounded-full border transition duration-75 text-sm group-hover:text-blue-color me-5 dark:group-hover:text-white" src={GptLogo} alt="logo" />
                                                        <p>{currElm}</p>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                }

                            </div>
                        </div>

                        <div className="relative bg-white mx-auto px-2 w-[100%] lg:w-[75%]" style={{ height: '10%' }}>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    onChange={(e) => setnewMessage(e.target.value)}
                                    value={newMessage}
                                    placeholder="Message ChatGpt"
                                    className="relative rounded-full px-7 py-2 bg-hover-bg focus:border-0 outline-none w-[100%]"
                                />
                                <button  onClick={handleNewMessage} className={`${!newMessage && 'opacity-50'} absolute right-2 transform translate-y-0`}>
                                    <FaArrowCircleUp  className="text-2xl" />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </Content>

        </DashboardLayout >
    </>;
};

export default RenderChats;
