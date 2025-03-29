
// Utility functions for managing event reminders

/**
 * Check if an event has a reminder set
 * @param eventId - The ID of the event to check
 * @returns boolean indicating if event has a reminder
 */
export const hasReminder = (eventId: string): boolean => {
  const reminders = getReminders();
  return reminders.includes(eventId);
};

/**
 * Get all event IDs that have reminders
 * @returns Array of event IDs with reminders
 */
export const getReminders = (): string[] => {
  try {
    const remindersJson = localStorage.getItem('eventReminders');
    return remindersJson ? JSON.parse(remindersJson) : [];
  } catch (error) {
    console.error('Error retrieving reminders:', error);
    return [];
  }
};

/**
 * Add a reminder for an event
 * @param eventId - The ID of the event to add a reminder for
 * @returns boolean indicating success
 */
export const addReminder = (eventId: string): boolean => {
  try {
    const reminders = getReminders();
    if (!reminders.includes(eventId)) {
      reminders.push(eventId);
      localStorage.setItem('eventReminders', JSON.stringify(reminders));
    }
    return true;
  } catch (error) {
    console.error('Error adding reminder:', error);
    return false;
  }
};

/**
 * Remove a reminder for an event
 * @param eventId - The ID of the event to remove a reminder for
 * @returns boolean indicating success
 */
export const removeReminder = (eventId: string): boolean => {
  try {
    const reminders = getReminders();
    const updatedReminders = reminders.filter(id => id !== eventId);
    localStorage.setItem('eventReminders', JSON.stringify(updatedReminders));
    return true;
  } catch (error) {
    console.error('Error removing reminder:', error);
    return false;
  }
};

/**
 * Toggle reminder status for an event
 * @param eventId - The ID of the event to toggle reminder for
 * @returns New reminder status (true if added, false if removed)
 */
export const toggleReminder = (eventId: string): boolean => {
  const hasReminderSet = hasReminder(eventId);
  if (hasReminderSet) {
    removeReminder(eventId);
    return false;
  } else {
    addReminder(eventId);
    return true;
  }
};
