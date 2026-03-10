import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Minimize2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  responseType?: string; // Store the type of response for re-translation
}

export function AIChatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevLanguageRef = useRef(language);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Re-translate bot messages when language changes
  useEffect(() => {
    if (prevLanguageRef.current !== language) {
      setMessages(prevMessages => 
        prevMessages.map(msg => {
          if (msg.sender === 'bot' && msg.responseType) {
            return {
              ...msg,
              text: getResponseByType(msg.responseType)
            };
          }
          return msg;
        })
      );
      prevLanguageRef.current = language;
    }
  }, [language]);

  useEffect(() => {
    if (isOpen && !isMinimized && messages.length === 0) {
      // Send greeting message when chat opens for first time
      const greeting: Message = {
        id: Date.now().toString(),
        text: t('chatbot.greeting'),
        sender: 'bot',
        timestamp: new Date(),
        responseType: 'greeting'
      };
      setMessages([greeting]);
    }
  }, [isOpen, isMinimized, t, messages.length]);

  const getResponseByType = (responseType: string): string => {
    const responses: Record<string, { es: string; en: string }> = {
      greeting: {
        es: '¡Hola! 👋 Soy tu asistente virtual de Capitán Poop. ¿En qué puedo ayudarte hoy?',
        en: 'Hello! 👋 I\'m your Capitán Poop virtual assistant. How can I help you today?'
      },
      products: {
        es: 'Tenemos dos líneas de productos: 🚽 Capitan Poop (para el baño) y 🏠 Capitan Home (para el hogar). Ambos son 100% naturales. Los precios van desde $29,900 hasta $89,900. ¿Te gustaría ver nuestro catálogo completo?',
        en: 'We have two product lines: 🚽 Capitan Poop (for the bathroom) and 🏠 Capitan Home (for the home). Both are 100% natural. Prices range from $29,900 to $89,900. Would you like to see our complete catalog?'
      },
      howItWorks: {
        es: '¡Es muy fácil! 1️⃣ Agita bien el producto. 2️⃣ Rocía 2-3 veces sobre el agua del inodoro (Capitan Poop) o en el área deseada (Capitan Home). 3️⃣ ¡Listo! Los aceites esenciales neutralizan los olores al instante. ¿Quieres más detalles?',
        en: 'It\'s very easy! 1️⃣ Shake the product well. 2️⃣ Spray 2-3 times over the toilet water (Capitan Poop) or in the desired area (Capitan Home). 3️⃣ Done! Essential oils neutralize odors instantly. Want more details?'
      },
      shipping: {
        es: '📦 Realizamos envíos a toda Colombia! Tu pedido llegará entre 2-5 días hábiles. Trabajamos con las mejores empresas de mensajería para garantizar que tu producto llegue en perfecto estado.',
        en: '📦 We ship to all of Colombia! Your order will arrive in 2-5 business days. We work with the best courier companies to ensure your product arrives in perfect condition.'
      },
      natural: {
        es: '🌿 ¡100% naturales! Usamos aceites esenciales de alta calidad sin químicos agresivos, parabenos ni alcohol. Es completamente seguro para toda la familia, incluyendo niños y mascotas. Nuestros productos neutralizan olores en lugar de enmascararlos.',
        en: '🌿 100% natural! We use high-quality essential oils without harsh chemicals, parabens, or alcohol. It is completely safe for the whole family, including children and pets. Our products neutralize odors instead of masking them.'
      },
      contact: {
        es: '📞 ¡Estamos aquí para ayudarte!\n\n📱 WhatsApp: +57 321 555 1234\n✉️ Email: micapitan.poop@gmail.com\n📸 Instagram: @capitan.poop\n\nNuestro horario de atención es de Lunes a Viernes, 8:00 AM - 6:00 PM. ¡Pero este chatbot está disponible 24/7!',
        en: '📞 We are here to help!\n\n📱 WhatsApp: +57 321 555 1234\n✉️ Email: micapitan.poop@gmail.com\n📸 Instagram: @capitan.poop\n\nOur business hours are Monday to Friday, 8:00 AM - 6:00 PM. But this chatbot is available 24/7!'
      },
      payment: {
        es: '💳 Aceptamos múltiples métodos de pago: Tarjetas de crédito/débito, Mercado Pago con cuotas sin intereses (3, 6, 9 o 12 cuotas), y PSE. ¡Todos los pagos son 100% seguros!',
        en: '💳 We accept multiple payment methods: Credit/debit cards, Mercado Pago with interest-free installments (3, 6, 9 or 12 installments), and PSE. All payments are 100% secure!'
      },
      duration: {
        es: '⏰ Un frasco de 60ml dura entre 2-3 meses con uso regular. Solo necesitas 2-3 gotas por aplicación, ¡así que rinde muchísimo! La efectividad es inmediata - los aceites esenciales neutralizan olores al instante.',
        en: '⏰ A 60ml bottle lasts 2-3 months with regular use. You only need 2-3 drops per application, so it lasts a long time! The effectiveness is immediate - essential oils neutralize odors instantly.'
      },
      thanks: {
        es: '¡De nada! 😊 ¿Hay algo más en lo que pueda ayudarte? Estoy aquí 24/7.',
        en: 'You\'re welcome! 😊 Is there anything else I can help you with? I\'m here 24/7.'
      },
      hello: {
        es: '¡Hola! 👋 ¿En qué puedo ayudarte hoy? Puedo responder preguntas sobre productos, envíos, ingredientes, pagos y más.',
        en: 'Hello! 👋 How can I help you today? I can answer questions about products, shipping, ingredients, payments, and more.'
      },
      default: {
        es: 'Gracias por tu pregunta. 😊 Puedo ayudarte con información sobre:\n\n🛍️ Productos y precios\n💡 Cómo funcionan nuestros productos\n📦 Envíos y entregas\n🌿 Ingredientes naturales\n💳 Métodos de pago\n📞 Contacto\n\n¿Sobre qué te gustaría saber más?',
        en: 'Thanks for your question. 😊 I can help you with information about:\n\n🛍️ Products and prices\n💡 How our products work\n📦 Shipping and delivery\n🌿 Natural ingredients\n💳 Payment methods\n📞 Contact\n\nWhat would you like to know more about?'
      }
    };

    const response = responses[responseType];
    return response ? response[language] : responses.default[language];
  };

  const getAIResponse = (userMessage: string): { text: string; type: string } => {
    const messageLower = userMessage.toLowerCase();
    
    // Product related questions
    if (messageLower.includes('producto') || messageLower.includes('product') || 
        messageLower.includes('comprar') || messageLower.includes('buy') ||
        messageLower.includes('precio') || messageLower.includes('price')) {
      return { text: getResponseByType('products'), type: 'products' };
    }

    // How it works questions
    if (messageLower.includes('funciona') || messageLower.includes('work') ||
        messageLower.includes('usar') || messageLower.includes('use') ||
        messageLower.includes('como') || messageLower.includes('how')) {
      return { text: getResponseByType('howItWorks'), type: 'howItWorks' };
    }

    // Shipping questions
    if (messageLower.includes('envío') || messageLower.includes('envio') || 
        messageLower.includes('shipping') || messageLower.includes('deliver') ||
        messageLower.includes('entrega')) {
      return { text: getResponseByType('shipping'), type: 'shipping' };
    }

    // Natural ingredients questions
    if (messageLower.includes('natural') || messageLower.includes('ingrediente') ||
        messageLower.includes('ingredient') || messageLower.includes('químico') ||
        messageLower.includes('chemical') || messageLower.includes('seguro') ||
        messageLower.includes('safe')) {
      return { text: getResponseByType('natural'), type: 'natural' };
    }

    // Contact questions
    if (messageLower.includes('contacto') || messageLower.includes('contact') ||
        messageLower.includes('teléfono') || messageLower.includes('telefono') ||
        messageLower.includes('phone') || messageLower.includes('whatsapp') ||
        messageLower.includes('email') || messageLower.includes('correo')) {
      return { text: getResponseByType('contact'), type: 'contact' };
    }

    // Payment questions
    if (messageLower.includes('pago') || messageLower.includes('payment') ||
        messageLower.includes('cuota') || messageLower.includes('installment') ||
        messageLower.includes('mercado pago') || messageLower.includes('tarjeta') ||
        messageLower.includes('card')) {
      return { text: getResponseByType('payment'), type: 'payment' };
    }

    // Duration/effectiveness questions
    if (messageLower.includes('dura') || messageLower.includes('last') ||
        messageLower.includes('efectivo') || messageLower.includes('effective') ||
        messageLower.includes('rendidor') || messageLower.includes('efficient')) {
      return { text: getResponseByType('duration'), type: 'duration' };
    }

    // Thanks/greeting
    if (messageLower.includes('gracias') || messageLower.includes('thank')) {
      return { text: getResponseByType('thanks'), type: 'thanks' };
    }

    // Hello/greetings
    if (messageLower.includes('hola') || messageLower.includes('hello') ||
        messageLower.includes('hi') || messageLower.includes('hey')) {
      return { text: getResponseByType('hello'), type: 'hello' };
    }

    // Default response
    return { text: getResponseByType('default'), type: 'default' };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI typing delay
    setTimeout(() => {
      const aiResponse = getAIResponse(inputValue);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse.text,
        sender: 'bot',
        timestamp: new Date(),
        responseType: aiResponse.type
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickOptions = [
    { text: t('chatbot.option.products'), emoji: '🛍️' },
    { text: t('chatbot.option.howItWorks'), emoji: '💡' },
    { text: t('chatbot.option.shipping'), emoji: '📦' },
    { text: t('chatbot.option.natural'), emoji: '🌿' },
    { text: t('chatbot.option.contact'), emoji: '📞' },
  ];

  const handleQuickOption = (option: string) => {
    setInputValue(option);
    inputRef.current?.focus();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#8B7FB8] to-[#7BC4DB] rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-[#8B7FB8]/50"
            aria-label={t('chatbot.open')}
          >
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8" />
            <motion.div
              className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              aria-hidden="true"
            />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : undefined
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            className="fixed inset-x-4 bottom-4 sm:inset-x-auto sm:bottom-6 sm:right-6 z-50 sm:w-full sm:max-w-md bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            style={{ 
              maxHeight: isMinimized ? 'auto' : 'calc(100vh - 2rem)',
              height: isMinimized ? 'auto' : '600px'
            }}
            role="dialog"
            aria-labelledby="chatbot-title"
            aria-modal="true"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#8B7FB8] to-[#7BC4DB] p-3 sm:p-4 flex items-center justify-between text-white flex-shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <div className="relative flex-shrink-0">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full border-2 border-white" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h2 id="chatbot-title" className="font-bold text-base sm:text-lg truncate">
                    {t('chatbot.title')}
                  </h2>
                  <p className="text-xs text-white/90 truncate">{t('chatbot.subtitle')}</p>
                </div>
              </div>
              <div className="flex gap-1 sm:gap-2 flex-shrink-0">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={t('chatbot.minimize')}
                >
                  <Minimize2 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 sm:p-2 hover:bg-white/20 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                  aria-label={t('chatbot.close')}
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div 
                  className="chatbot-messages flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gradient-to-br from-gray-50 to-white"
                  role="log"
                  aria-live="polite"
                  aria-atomic="false"
                >
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] sm:max-w-[80%] rounded-2xl px-3 py-2 sm:px-4 sm:py-3 ${
                          message.sender === 'user'
                            ? 'bg-gradient-to-br from-[#8B7FB8] to-[#7BC4DB] text-white'
                            : 'bg-white shadow-md border border-gray-100'
                        }`}
                        role="article"
                        aria-label={`${message.sender === 'user' ? 'You' : 'Assistant'}: ${message.text}`}
                      >
                        <p className="text-xs sm:text-sm whitespace-pre-wrap break-words">
                          {message.text}
                        </p>
                        <p className={`text-[10px] sm:text-xs mt-1 ${
                          message.sender === 'user' ? 'text-white/70' : 'text-gray-400'
                        }`}>
                          {message.timestamp.toLocaleTimeString(language === 'es' ? 'es-CO' : 'en-US', {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="bg-white shadow-md border border-gray-100 rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
                        <div className="flex gap-1" aria-label={t('chatbot.typing')}>
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-gray-400 rounded-full"
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Options */}
                {messages.length <= 1 && (
                  <div className="px-3 sm:px-4 py-2 border-t bg-gray-50 flex-shrink-0">
                    <p className="text-xs text-gray-600 mb-2 font-semibold">
                      {t('chatbot.quickOptions')}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {quickOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleQuickOption(option.text)}
                          className="text-[10px] sm:text-xs px-2 sm:px-3 py-1 sm:py-1.5 bg-white border border-gray-200 rounded-full hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8B7FB8]/50"
                        >
                          {option.text}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Input Area */}
                <div className="p-3 sm:p-4 border-t bg-white flex-shrink-0">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSendMessage();
                    }}
                    className="flex gap-2"
                  >
                    <Input
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={t('chatbot.placeholder')}
                      className="flex-1 text-sm"
                      aria-label={t('chatbot.placeholder')}
                      autoComplete="off"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="bg-gradient-to-br from-[#8B7FB8] to-[#7BC4DB] hover:opacity-90 flex-shrink-0"
                      disabled={!inputValue.trim() || isTyping}
                      aria-label={t('chatbot.send')}
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}