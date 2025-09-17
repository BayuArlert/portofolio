import React, { useState } from "react";
import { Award, Calendar, X, ExternalLink } from "lucide-react";

// Certificate Image Component
const CertificateImage = ({ title, issuer, date, imageUrl, alt, onClick }) => {
  return (
    <div
      className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] overflow-hidden relative z-0 group cursor-pointer"
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
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
          <h3 className="text-white text-lg font-black mb-1 line-clamp-2">
            {title}
          </h3>
          <p className="text-white/90 text-sm font-semibold truncate">
            {issuer}
          </p>
          <div className="flex items-center gap-2 text-white/80 text-xs mt-1">
            <Calendar className="w-3 h-3 flex-shrink-0" />
            <span>{date}</span>
          </div>
        </div>
        {/* Click indicator */}
        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <ExternalLink className="w-4 h-4 text-white" />
        </div>
      </div>
    </div>
  );
};

// Certificate Modal Component
const CertificateModal = ({ certificate, isOpen, onClose }) => {
  if (!isOpen || !certificate) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-4xl max-h-[90vh] w-full bg-white border-4 border-black rounded-2xl shadow-[12px_12px_0px_0px_#000000] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white border-4 border-black rounded-full p-2 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all"
        >
          <X className="w-6 h-6 text-black" />
        </button>

        {/* Modal Content */}
        <div className="p-6">
          {/* Certificate Image */}
          <div className="mb-6">
            <img
              src={certificate.imageUrl}
              alt={certificate.alt}
              className="w-full max-h-[60vh] object-contain bg-gray-50 rounded-lg border-4 border-black"
            />
          </div>

          {/* Certificate Details */}
          <div className="text-center">
            <h3 className="text-3xl font-black mb-4 text-gray-900">
              {certificate.title}
            </h3>
            <div className="flex items-center justify-center gap-2 text-xl text-gray-700 mb-2">
              <Award className="w-6 h-6 text-[#ff9800]" />
              <span className="font-bold">{certificate.issuer}</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
              <Calendar className="w-5 h-5" />
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
      imageUrl: "/images/certificates/sertif-hackathon.jpeg",
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

  return (
    <section
      id="certificate"
      className="py-20 bg-[#faf9f6] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute w-24 h-24 bg-[#ff9800] rounded-full border-4 border-black top-10 right-20 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#e91e63] rounded-full border-4 border-black top-30 left-25 lg:z-auto -z-10"></div>
      <div className="absolute w-16 h-16 bg-[#9c27b0] rounded-full border-4 border-black bottom-10 right-20 lg:z-auto -z-10"></div>

      <div className="container mx-auto px-6">
        {/* Certificates Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black rounded-full px-6 py-3 font-bold shadow-[4px_4px_0px_0px_#000000] mb-8">
            <Award className="w-5 h-5 text-[#ff9800]" />
            Professional Certifications
          </div>

          <h2 className="text-5xl lg:text-7xl font-black mb-6">
            <span className="gradient-text">Certificates</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Validated expertise and continuous learning
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {certificates.map((cert, index) => (
              <CertificateImage
                key={`${cert.issuer}-${index}`}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                imageUrl={cert.imageUrl}
                alt={cert.alt}
                onClick={() => handleCertificateClick(cert)}
              />
            ))}
          </div>
        </div>

        {/* Certificate Modal */}
        <CertificateModal
          certificate={selectedCertificate}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        {/* CTA Section */}
        <div id="contact" className="text-center mt-20">
          <div className="bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000000] transition-all duration-200 hover:shadow-[12px_12px_0px_0px_#000000] hover:translate-x-[-2px] hover:translate-y-[-2px] max-w-2xl mx-auto p-8 bg-gradient-to-r from-[#00bcd4] to-[#2196f3] text-white">
            <h3 className="text-3xl font-black mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's create something amazing together. I'm always excited to
              take on new challenges and build innovative solutions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="http://wa.me/6285643116008"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white text-[#00bcd4] px-8 py-4 rounded-2xl font-bold border-4 border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
                  Get In Touch
                </button>
              </a>
              {/* <button className="bg-transparent border-4 border-white text-white px-8 py-4 rounded-2xl font-bold shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,0.3)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition-all">
                View Resume
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificateSection;
