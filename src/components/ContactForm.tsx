
import { useState } from "react";
import { Mail, Phone, MessageSquare, Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    tourType: "private"
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real implementation, you would send this data to your backend
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        tourType: "private"
      });
    }, 3000);
  };

  return (
    <section id="contact" className="section-padding bg-primary/30">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-accent-foreground/70 uppercase tracking-wider text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="heading-lg mt-2 mb-6">
            Plan Your Luxury Experience
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg">
            Have questions or ready to book your tour? Reach out to our team for personalized assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="heading-md mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Phone className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p>+91 98765 43210</p>
                    <p className="text-sm text-accent-foreground/70">Available 9am - 8pm IST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Mail className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p>info@tajheritage.com</p>
                    <p className="text-sm text-accent-foreground/70">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-accent/20 p-3 rounded-full">
                    <MessageSquare className="text-accent-foreground" size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">WhatsApp</h4>
                    <p>+91 98765 43210</p>
                    <p className="text-sm text-accent-foreground/70">Quick responses for urgent queries</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-playfair text-xl font-semibold mb-4">Our Office</h3>
              <p className="mb-2">
                Heritage Tower, 123 Taj Road
                <br />
                Agra, Uttar Pradesh 282001
                <br />
                India
              </p>
              <p className="text-sm text-accent-foreground/70">
                Just 1 km from the eastern gate of the Taj Mahal
              </p>
            </div>
          </div>

          <div className="md:col-span-3 bg-white rounded-xl shadow-md p-6 md:p-8">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="bg-green-100 rounded-full p-4 mb-6">
                  <Send className="text-green-600" size={32} />
                </div>
                <h3 className="heading-md mb-4">Thank You!</h3>
                <p className="text-lg mb-2">Your message has been sent successfully.</p>
                <p>Our team will contact you shortly to assist with your inquiry.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="heading-md mb-6">Send Us a Message</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="tourType" className="block text-sm font-medium mb-2">
                      Preferred Tour Type
                    </label>
                    <select 
                      id="tourType"
                      name="tourType"
                      value={formData.tourType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    >
                      <option value="private">Private Tour</option>
                      <option value="group">Group Tour</option>
                      <option value="custom">Custom Tour</option>
                      <option value="notSure">Not Sure Yet</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    placeholder="Tell us about your travel plans, questions, or special requests..."
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                  <p className="text-center text-sm text-accent-foreground/70 mt-4">
                    We'll respond to your inquiry within 24 hours.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
