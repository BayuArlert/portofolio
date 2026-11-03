import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  useScrollAnimation,
  staggerContainerVariants,
  staggerItemVariants,
  fadeUpVariants,
  scaleInVariants,
} from "../hooks/useScrollAnimation";
import { Award, Calendar, X, ExternalLink } from "lucide-react";

// Certificate Image Component
const CertificateImage = ({ title, issuer, date, imageUrl, alt, onClick }) => {
  return (
    <div
      className="bg-white border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000000] sm:shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 hover:shadow-[10px_10px_0px_0px_#000000] sm:hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] overflow-hidden relative z-0 group cursor-pointer"
      onClick={onClick}
    >
      {/* Certificate Image */}
      <div className="relative aspect-[4/3]">
        <img
          src={imageUrl}
          alt={alt || `${title} certificate`}
          className="w-full h-full object-contain bg-gray-50 transform transition-transform duration-200 group-hover:scale-105 group-hover:z-10"
        />
        {/* Overlay with basic info */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-3 sm:p-4">
          <h3 className="text-white text-base sm:text-lg font-black mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm font-semibold truncate">
            {issuer}
          </p>
          <div className="flex items-center gap-2 text-white/80 text-xs mt-1">
            <Calendar className="w-3 h-3 flex-shrink-0" />
            <span>{date}</span>
          </div>
        </div>
        {/* Click indicator */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-black/40 backdrop-blur-sm rounded-full p-1.5 sm:p-2 opacity-80 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

// Certificate Modal Component
const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative max-w-4xl max-h-[92vh] w-full bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] sm:shadow-[12px_12px_0px_0px_#000000] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 bg-white border-4 border-black rounded-full p-1.5 sm:p-2 shadow-[3px_3px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
        </button>

        {/* Modal Content */}
        <div className="p-4 sm:p-6">
          {/* Certificate Image */}
          <div className="mb-4 sm:mb-6">
            <img
              src={certificate.imageUrl}
              alt={certificate.alt}
              className="w-full max-h-[50vh] sm:max-h-[60vh] object-contain bg-gray-50 rounded-lg border-2 sm:border-4 border-black"
            />
          </div>

          {/* Certificate Details */}
          <div className="text-center px-2">
            <h3 className="text-xl sm:text-3xl font-black mb-2 sm:mb-4 text-gray-900">
              {certificate.title}
            </h3>
            <div className="flex items-center justify-center gap-2 text-base sm:text-xl text-gray-700 mb-2">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff9800]" />
              <span className="font-bold">{certificate.issuer}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-lg text-gray-600">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>{certificate.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CertificateSection = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [
    {
      title: "CODE FEST 2025",
      issuer: "Arunai Engineering College",
      date: "February 2025",
      imageUrl: "/images/sertif-hackathon.jpeg",
      alt: "CODE FEST 2025 Certificate",
    },
  ];

  const handleCertificateClick = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  const { ref: headerRef, isInView: headerInView } = useScrollAnimation({ threshold: 0.1 });
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation({ threshold: 0.05 });
  const { ref: ctaRef, isInView: ctaInView } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section
      id="certificate"
      className="py-12 sm:py-16 md:py-20 bg-[#faf9f6] relative overflow-hidden"
    >
      {/* Decorative elements - hidden on small mobile to avoid horizontal scroll */}
      <div className="hidden sm:block absolute w-24 h-24 bg-[#ff9800] rounded-full border-4 border-black top-10 right-20 lg:z-auto -z-10"></div>
      <div className="hidden sm:block absolute w-16 h-16 bg-[#e91e63] rounded-full border-4 border-black top-28 left-20 lg:z-auto -z-10"></div>
      <div className="hidden sm:block absolute w-16 h-16 bg-[#9c27b0] rounded-full border-4 border-black bottom-10 right-20 lg:z-auto -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Certificates Section Header */}
        <motion.div
          ref={headerRef}
          variants={staggerContainerVariants}
          initial="hidden"
          animate={headerInView ? 'visible' : 'hidden'}
          className="text-center mb-10 sm:mb-16"
        >
          <motion.div variants={staggerItemVariants} className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-4 sm:px-6 py-2 sm:py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-6 sm:mb-8 text-sm sm:text-base">
            <Award className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff9800]" />
            Professional Certifications
          </motion.div>

          <motion.h2 variants={fadeUpVariants} className="text-3xl sm:text-5xl lg:text-7xl font-black mb-4 sm:mb-6">
            <span className="gradient-text">Certificates</span>
          </motion.h2>

          <motion.p variants={staggerItemVariants} className="text-base sm:text-xl text-gray-700 max-w-2xl mx-auto px-2">
            Validated expertise and continuous learning
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto mb-12 sm:mb-20">
          <motion.div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={`${cert.issuer}-${index}`}
                initial={{ opacity: 0, y: 32 }}
                animate={gridInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <CertificateImage
                  title={cert.title}
                  issuer={cert.issuer}
                  date={cert.date}
                  imageUrl={cert.imageUrl}
                  alt={cert.alt}
                  onClick={() => handleCertificateClick(cert)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* CTA Section */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          id="contact"
          className="text-center mt-10 sm:mt-20"
        >
          <div className="border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_#000000] sm:shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 hover:shadow-[10px_10px_0px_0px_#000000] sm:hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] max-w-2xl mx-auto p-5 sm:p-8 bg-gradient-to-r from-[#00bcd4] to-[#2196f3] text-white">
            <h3 className="text-2xl sm:text-3xl font-black mb-3 sm:mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-sm sm:text-lg mb-6 opacity-90 leading-relaxed">
              Let's create something amazing together. I'm always excited to
              take on new challenges and build innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://api.whatsapp.com/send/?phone=6285643116008&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <button className="w-full sm:w-auto bg-white text-[#00bcd4] px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all cursor-pointer">
                  Get In Touch
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateSection;
