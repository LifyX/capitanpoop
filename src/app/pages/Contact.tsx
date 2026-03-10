import { useState } from 'react';
import { Mail, Phone, Instagram, MessageCircle, Share2, Facebook, Twitter, Linkedin, Link, Check, MapPin } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import capitanBanner from '../../assets/e16b50cbbd8d63514c5e7d9ca3a8c7b08535baf7.png';

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [linkCopied, setLinkCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Mensaje enviado correctamente. Te contactaremos pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const siteUrl = window.location.origin;
  const shareTitle = 'Capitán Poop - Eliminadores de Olores Naturales';
  const shareText = '¡Descubre Capitán Poop! Eliminadores de olores naturales para tu baño y hogar. 🌿';

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setLinkCopied(true);
      toast.success(t('contact.linkCopied') || 'Link copied to clipboard!');
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(siteUrl)}`, '_blank', 'width=600,height=400');
  };

  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(siteUrl)}&text=${encodeURIComponent(shareText)}`, '_blank', 'width=600,height=400');
  };

  const shareOnLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(siteUrl)}`, '_blank', 'width=600,height=400');
  };

  const shareOnInstagram = () => {
    // Instagram doesn't have a direct share URL, so we'll copy the link and show a helpful message
    navigator.clipboard.writeText(siteUrl);
    toast.success(t('contact.instagramCopy') || 'Link copied! Open Instagram to share.');
  };

  const shareOnPinterest = () => {
    // Pinterest share URL - can optionally add description and image URL
    window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(siteUrl)}&description=${encodeURIComponent(shareText)}`, '_blank', 'width=750,height=550');
  };

  const shareOnWhatsApp = () => {
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + siteUrl)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5C8D8]/15 via-white to-[#C9BFDB]/15 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 -right-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-[#7BC4DB]/20 to-[#5BC0EB]/10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 -left-20 w-60 h-60 sm:w-80 sm:h-80 rounded-full bg-gradient-to-br from-[#F4DB5E]/20 to-[#EFD95A]/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-[#FF6B7A]/15 to-[#F5C8D8]/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-gray-600">
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Trust Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#7BC4DB] to-[#5BC0EB] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{t('trustBadge.shipping')}</h3>
                <p className="text-gray-600 text-sm">{t('trustBadge.shippingDesc')}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B7FB8] to-[#C9BFDB] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{t('trustBadge.payment')}</h3>
                <p className="text-gray-600 text-sm">{t('trustBadge.paymentDesc')}</p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#EFD95A] to-[#F4DB5E] rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{t('trustBadge.security')}</h3>
                <p className="text-gray-600 text-sm">{t('trustBadge.securityDesc')}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Capitan Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <img 
            src={capitanBanner} 
            alt="El Capitan de los malos olores" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Column 1: Contact Form & Why Choose Us */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl font-bold mb-6">Envíanos un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t('contact.name')}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t('contact.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="[email protected]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.message')}
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  {t('contact.send')}
                </Button>
              </form>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-[#C9BFDB]/20 to-[#F5C8D8]/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">{t('contact.whyChooseUs')}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.guarantee1')}</h4>
                    <p className="text-sm text-gray-700">
                      {t('contact.guarantee1desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.guarantee2')}</h4>
                    <p className="text-sm text-gray-700">
                      {t('contact.guarantee2desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('contact.guarantee3')}</h4>
                    <p className="text-sm text-gray-700">
                      {t('contact.guarantee3desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-center">Información de Contacto</h2>
              
              <div className="space-y-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.phone')}</h3>
                    <a
                      href="tel:+573215551234"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      +57 321 555 1234
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:micapitan.poop@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      micapitan.poop@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://api.whatsapp.com/send/?phone=573215551234&text&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      +57 321 555 1234
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-6 w-6 text-pink-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <a
                      href="https://instagram.com/capitan.poop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      @capitan.poop
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t('contact.location')}</h3>
                    <p className="text-gray-600">
                      Bogotá, Colombia 🇨🇴
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">{t('contact.businessHours')}</h3>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>{t('contact.monday-friday')}</span>
                  <span className="font-semibold">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.saturday')}</span>
                  <span className="font-semibold">10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.sunday')}</span>
                  <span className="font-semibold">{t('contact.closed')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive FAQ Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('faq.title')}
            </h2>
            <p className="text-lg text-gray-600">
              {t('faq.subtitle')}
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-b">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{t('faq.q1')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base pt-4 pb-6">
                  {t('faq.a1')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{t('faq.q2')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base pt-4 pb-6">
                  {t('faq.a2')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{t('faq.q3')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base pt-4 pb-6">
                  {t('faq.a3')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{t('faq.q4')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base pt-4 pb-6">
                  {t('faq.a4')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{t('faq.q5')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base pt-4 pb-6">
                  {t('faq.a5')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{t('faq.q6')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base pt-4 pb-6">
                  {t('faq.a6')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{t('faq.q7')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base pt-4 pb-6">
                  {t('faq.a7')}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-none">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-lg">{t('faq.q8')}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 text-base pt-4 pb-6">
                  {t('faq.a8')}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </motion.div>

        {/* Share Buttons */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold mb-4">{t('contact.share')}</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={shareOnFacebook}
              aria-label="Share on Facebook"
            >
              <Facebook className="h-5 w-5" />
            </Button>
            <Button
              size="sm"
              className="bg-sky-500 hover:bg-sky-600 text-white"
              onClick={shareOnTwitter}
              aria-label="Share on Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Button>
            <Button
              size="sm"
              className="bg-blue-700 hover:bg-blue-800 text-white"
              onClick={shareOnLinkedIn}
              aria-label="Share on LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              onClick={shareOnInstagram}
              aria-label="Share on Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Button>
            <Button
              size="sm"
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={shareOnPinterest}
              aria-label="Share on Pinterest"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0a12 12 0 0 0-4.37 23.18c-.1-.86-.18-2.18 0-3.12.18-.84 1.08-4.6 1.08-4.6s-.28-.54-.28-1.34c0-1.26.72-2.2 1.64-2.2.76 0 1.14.58 1.14 1.26 0 .76-.5 1.92-.74 2.98-.2.88.44 1.6 1.3 1.6 1.58 0 2.78-1.66 2.78-4.06 0-2.12-1.52-3.6-3.7-3.6-2.52 0-4 1.9-4 3.86 0 .76.3 1.58.66 2.04.08.08.08.16.06.24-.06.28-.22.9-.24 1.02-.04.16-.12.2-.28.12-1.1-.5-1.8-2.08-1.8-3.36 0-2.8 2.02-5.36 5.84-5.36 3.06 0 5.44 2.18 5.44 5.1 0 3.04-1.92 5.5-4.58 5.5-.9 0-1.74-.46-2.02-.98l-.56 2.1c-.2.78-.74 1.76-1.1 2.36A12 12 0 1 0 12 0z"/>
              </svg>
            </Button>
            <Button
              size="sm"
              className="bg-gray-600 hover:bg-gray-700 text-white relative"
              onClick={handleCopyLink}
              aria-label="Copy link"
            >
              {linkCopied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Link className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}