import React, { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";
import { format } from "date-fns";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, LogOut } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: any;
}

const AdminDashboard = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageStats, setMessageStats] = useState<any[]>([]);
  const [error, setError] = useState<string>("");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const newMessages = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[];

        setMessages(newMessages);

        // Calculate messages per day for the chart
        const stats = newMessages.reduce((acc: any, msg) => {
          const date = format(msg.timestamp.toDate(), "MM/dd");
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        setMessageStats(
          Object.entries(stats).map(([date, count]) => ({
            date,
            count,
          }))
        );
      },
      (err) => {
        setError("Error loading messages. Please check your permissions.");
        console.error("Firestore error:", err);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate("/admin");
    } catch (err) {
      setError("Failed to sign out");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Gradient Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-amber-500/5 rounded-full blur-3xl animate-ping" />
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className="text-white hover:text-amber-500 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </button>
              <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-gray-400">{user?.email}</span>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 bg-amber-500 text-black rounded-lg hover:bg-amber-400 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Sign Out
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-500 p-4 rounded-lg">
              {error}
            </div>
          )}

          {/* Analytics Chart */}
          <div className="bg-black/50 backdrop-blur-xl p-6 rounded-lg border border-amber-500/20">
            <h2 className="text-xl font-semibold mb-4">Message Analytics</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={messageStats}>
                  <XAxis dataKey="date" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#000",
                      border: "1px solid #f59e0b",
                    }}
                  />
                  <Bar dataKey="count" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Messages List */}
          <div className="bg-black/50 backdrop-blur-xl p-6 rounded-lg border border-amber-500/20">
            <h2 className="text-xl font-semibold mb-4">Recent Messages</h2>
            {messages.length === 0 ? (
              <p className="text-gray-400">No messages yet.</p>
            ) : (
              <div className="space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-black/50 backdrop-blur-sm border border-amber-500/20 p-4 rounded-lg hover:border-amber-500/40 transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{msg.name}</h3>
                        <p className="text-gray-400">{msg.email}</p>
                      </div>
                      <span className="text-sm text-gray-400">
                        {format(msg.timestamp.toDate(), "PPp")}
                      </span>
                    </div>
                    <p className="mt-2 text-gray-300">{msg.message}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
