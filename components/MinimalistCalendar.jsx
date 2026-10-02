'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function MinimalistCalendar({ events = [], selectedDate, onSelectDate }) {
  // Real dynamic current date
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDay = today.getDate();
  const todayDateStr = `${todayYear}-${String(todayMonth + 1).padStart(2, '0')}-${String(todayDay).padStart(2, '0')}`;

  // Calendar month & year view
  const [currentMonth, setCurrentMonth] = useState(todayMonth);
  const [currentYear, setCurrentYear] = useState(todayYear);

  // Sync month view if selected date is in a different month
  useEffect(() => {
    if (selectedDate) {
      const parts = selectedDate.split('-');
      if (parts.length === 3) {
        const y = parseInt(parts[0], 10);
        const m = parseInt(parts[1], 10) - 1;
        if (!isNaN(y) && !isNaN(m)) {
          setCurrentYear(y);
          setCurrentMonth(m);
        }
      }
    }
  }, [selectedDate]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((y) => y - 1);
    } else {
      setCurrentMonth((m) => m - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((y) => y + 1);
    } else {
      setCurrentMonth((m) => m + 1);
    }
  };

  const formatDateStr = (year, month, day) => {
    const m = String(month + 1).padStart(2, '0');
    const d = String(day).padStart(2, '0');
    return `${year}-${m}-${d}`;
  };

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const eventDatesSet = new Set(events.map((e) => e.date));

  return (
    <div className="w-full max-w-lg md:max-w-xl mx-auto select-none px-1">
      {/* Minimal Month & Year Header */}
      <div className="flex items-center justify-between pb-5 border-b border-slate-200">
        <div className="flex items-baseline gap-2.5 sm:gap-3">
          <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#0c2340] font-heading">
            {monthNames[currentMonth]}
          </span>
          <span className="text-base sm:text-lg font-light text-slate-400 font-heading">
            {currentYear}
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={handlePrevMonth}
            aria-label="Previous Month"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button
            onClick={handleNextMonth}
            aria-label="Next Month"
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Weekdays Header */}
      <div className="grid grid-cols-7 pt-4 pb-2 text-center">
        {daysOfWeek.map((day, idx) => (
          <div
            key={idx}
            className="text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 font-heading py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Days Grid: Fully Responsive with Touch Manipulation */}
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {/* Padded Days from Prev Month */}
        {Array.from({ length: firstDayIndex }).map((_, i) => (
          <div
            key={`prev-${i}`}
            className="py-2 text-xs sm:text-sm text-slate-300 font-normal select-none"
          >
            {daysInPrevMonth - firstDayIndex + i + 1}
          </div>
        ))}

        {/* Days of Current Month */}
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const dayNum = i + 1;
          const dateStr = formatDateStr(currentYear, currentMonth, dayNum);
          const hasEvent = eventDatesSet.has(dateStr);
          const isSelected = selectedDate === dateStr;
          const isToday = dateStr === todayDateStr;

          return (
            <div key={`day-${dayNum}`} className="flex flex-col items-center justify-center py-1">
              <button
                onClick={() => onSelectDate(dateStr)}
                className={`relative w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full text-xs sm:text-sm flex items-center justify-center transition-all duration-150 touch-manipulation ${
                  isSelected
                    ? 'bg-[#0c2340] text-white font-bold shadow-xs scale-105'
                    : isToday
                    ? 'text-[#00a2e8] font-bold border-2 border-[#00a2e8] bg-sky-50/40 hover:bg-sky-100'
                    : hasEvent
                    ? 'text-[#0c2340] font-bold hover:bg-slate-100'
                    : 'text-slate-700 hover:bg-slate-100 font-normal'
                }`}
                aria-label={`${dateStr}${isToday ? ' (Today)' : ''}${hasEvent ? ' (Has events)' : ''}`}
              >
                <span>{dayNum}</span>

                {/* Event Dot Indicator */}
                {hasEvent && (
                  <span
                    className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                      isSelected ? 'bg-[#00a2e8]' : 'bg-[#00a2e8]'
                    }`}
                  />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
