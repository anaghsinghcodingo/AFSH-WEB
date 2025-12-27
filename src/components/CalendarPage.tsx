import React from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, Download } from 'lucide-react';

const CalendarPage: React.FC = () => {
  const events = [
    {
      month: 'January 2024',
      items: [
        { date: '1', title: 'New Year\'s Day', type: 'Holiday', icon: '🎆' },
        { date: '15', title: 'Army Day Celebration', type: 'Event', icon: '🎖️' },
        { date: '26', title: 'Republic Day Parade', type: 'National Day', icon: '🇮🇳' },
      ]
    },
    {
      month: 'February 2024',
      items: [
        { date: '10', title: 'Annual Day Function', type: 'Event', icon: '🎉' },
        { date: '15-20', title: 'Final Examinations (X, XII)', type: 'Exam', icon: '✏️' },
        { date: '24', title: 'Science Exhibition', type: 'Exhibition', icon: '🔬' },
      ]
    },
    {
      month: 'March 2024',
      items: [
        { date: '8', title: 'Maha Shivratri', type: 'Holiday', icon: '🪔' },
        { date: '25', title: 'Holi', type: 'Holiday', icon: '🎨' },
        { date: '31', title: 'Academic Session Ends', type: 'Academic', icon: '📅' },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 pt-32 pb-20">
      {/* Header */}
      <section className="bg-af-blue text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-af-gold" />
          <h1 className="text-5xl font-serif font-bold mb-4">Academic Calendar</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Stay updated with school events, holidays, and examination schedules for the academic session 2023-24
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Calendar Content */}
          <div className="lg:col-span-2 space-y-12">
            {events.map((section, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
                <div className="bg-gradient-to-r from-af-blue to-blue-700 px-8 py-4">
                  <h2 className="text-2xl font-bold text-white">{section.month}</h2>
                </div>
                <div className="p-0">
                  {section.items.map((event, eIdx) => (
                    <div key={eIdx} className="flex items-center gap-6 p-6 border-b border-gray-50 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors group">
                      <div className="flex-shrink-0 w-20 h-20 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex flex-col items-center justify-center text-af-blue dark:text-af-light border-2 border-transparent group-hover:border-af-blue dark:group-hover:border-af-light transition-all">
                        <span className="text-2xl font-bold">{event.date}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xl">{event.icon}</span>
                          <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
                            event.type === 'Holiday' ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' :
                            event.type === 'Exam' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400' :
                            'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {event.type}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-af-blue dark:group-hover:text-af-light transition-colors">
                          {event.title}
                        </h3>
                      </div>
                      <ChevronRight className="text-gray-300 dark:text-gray-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-l-4 border-af-gold pl-4">Download Resources</h3>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-af-blue hover:text-white transition-all group">
                  <div className="flex items-center gap-3">
                    <Download className="text-af-blue dark:text-af-light group-hover:text-white" size={20} />
                    <span className="font-medium">Full Calendar 2023-24</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-blue-200">PDF</span>
                </button>
                <button className="w-full flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-af-blue hover:text-white transition-all group">
                  <div className="flex items-center gap-3">
                    <Download className="text-af-blue dark:text-af-light group-hover:text-white" size={20} />
                    <span className="font-medium">Holiday List 2024</span>
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-blue-200">PDF</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-af-blue to-blue-700 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-4">Important Note</h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Dates are subject to change based on government orders or school administration decisions. Parents will be notified via SMS/App for any immediate changes.
                </p>
              </div>
              <div className="absolute -right-8 -bottom-8 opacity-10">
                <CalendarIcon size={160} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
