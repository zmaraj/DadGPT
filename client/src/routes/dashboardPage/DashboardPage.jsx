import './dashboardPage.css'
import { useAuth } from "@clerk/clerk-react";

const DashboardPage = () => {

    const { getToken } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const text = e.target.text.value;
        if (!text) return;
    
        const token = await getToken(); // 👈 GET CLERK JWT
    
        await fetch("http://localhost:3000/api/chats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // 👈 SEND IT
            },
            body: JSON.stringify({ text }),
        });
    };
    
    return (
        <div className='dashboardPage'>
            <div className="texts">
            <div className="logo">
                <img src="/logo2.png" alt="" />
                <h1>DadGPT</h1>
                </div>
                <div className="options">
                    <div className="option">
                        <img src="/chat.png" alt="" />
                        <span>Create a New Chat</span>
                    </div>
                    <div className="option">
                        <img src="/image.png" alt="" />
                        <span>Suggest an Indian song</span>
                    </div>
                    <div className="option">
                        <img src="/code.png" alt="" />
                        <span>Give me a tasty recipe</span>
                    </div>
                </div>
            </div>
            <div className="formContainer">
                <form onSubmit={handleSubmit}>
                    <input type="text" name="text" placeholder="Ask me anything..." />
                    <button>
                        <img src="/arrow.png" alt="" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DashboardPage