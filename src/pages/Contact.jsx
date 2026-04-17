import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videos = [
    "/product img/C3032.MP4",
    "/product img/L2.MP4"
  ];

  return (
    <div className="min-h-screen bg-[#fdfaf5]">
      {/* HERO WITH VIDEO PLAYLIST */}
      <div className="relative w-full h-[90vh] md:h-[100vh] flex items-center justify-center overflow-hidden">
        <video
          key={videos[currentVideo]}
          autoPlay
          muted
          playsInline
          onEnded={() => setCurrentVideo((prev) => (prev + 1) % videos.length)}
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src={videos[currentVideo]} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-4"
        >

          <h1 className="text-5xl md:text-7xl text-white premium-title font-bold drop-shadow-xl">
            Visit Us
          </h1>
        </motion.div>
      </div>

      {/* CONTENT WITH L1 IMAGE */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

          {/* L1 IMAGE SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative group"
          >
            <div className="absolute inset-0 bg-[#D4A373]/20 translate-x-4 translate-y-4 transition-transform duration-500 group-hover:translate-x-6 group-hover:translate-y-6"></div>
            <img
              src="/product img/L1.JPG"
              alt="Ishara Tea Local Shop"
              className="relative w-full h-[500px] md:h-[700px] object-cover  shadow-2xl z-10"
            />
          </motion.div>

          {/* CONTACT FORM SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col"
          >
            <h2 className="text-4xl text-[#1B4332] premium-title font-bold mb-8">
              Get in Touch
            </h2>
            <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed">
              Experience friendly service, fluent English communication, and a welcoming environment perfect for tourists and tea lovers alike. Drop by our center in beautiful Sri Lanka, or send us a message below.
            </p>

            <div className="flex flex-col gap-6 mb-12 text-gray-800 text-lg">
              <p className="flex items-center gap-4"><span className="text-3xl text-[#1B4332]">📍</span> Sri Lanka</p>
              <p className="flex items-center gap-4"><span className="text-3xl text-[#1B4332]">📞</span> +94 77 000 0000</p>
              <p className="flex items-center gap-4"><span className="text-3xl text-[#1B4332]">📧</span> isharateashop@gmail.com</p>
            </div>

            <form className="space-y-8">
              <input
                className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-4 focus:outline-none focus:border-[#1B4332] transition-colors text-lg"
                placeholder="Your Name"
              />
              <input
                className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-4 focus:outline-none focus:border-[#1B4332] transition-colors text-lg"
                placeholder="Your Email"
              />
              <textarea
                className="w-full border-b-2 border-gray-300 bg-transparent px-2 py-4 focus:outline-none focus:border-[#1B4332] transition-colors text-lg resize-none min-h-[120px]"
                placeholder="Your Message"
              ></textarea>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1B4332] text-white px-10 py-5 text-lg rounded-full font-bold shadow-lg hover:shadow-2xl transition-all"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;