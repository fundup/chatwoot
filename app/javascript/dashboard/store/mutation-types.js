export default {
  AUTHENTICATE: 'AUTHENTICATE',
  CLEAR_USER: 'LOGOUT',
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_CURRENT_ACCOUNT_ID: 'SET_CURRENT_ACCOUNT_ID',
  SET_CURRENT_USER_AVAILABILITY: 'SET_CURRENT_USER_AVAILABILITY',
  SET_CURRENT_USER_UI_SETTINGS: 'SET_CURRENT_USER_UI_SETTINGS',

  // Chat List
  RECEIVE_CHAT_LIST: 'RECEIVE_CHAT_LIST',
  SET_ALL_CONVERSATION: 'SET_ALL_CONVERSATION',
  EMPTY_ALL_CONVERSATION: 'EMPTY_ALL_CONVERSATION',
  SET_CONV_TAB_META: 'SET_CONV_TAB_META',
  CLEAR_LIST_LOADING_STATUS: 'CLEAR_LIST_LOADING_STATUS',
  SET_LIST_LOADING_STATUS: 'SET_LIST_LOADING_STATUS',
  SET_ALL_MESSAGES_LOADED: 'SET_ALL_MESSAGES_LOADED',
  CLEAR_ALL_MESSAGES_LOADED: 'CLEAR_ALL_MESSAGES_LOADED',
  CHANGE_CHAT_STATUS_FILTER: 'CHANGE_CHAT_STATUS_FILTER',
  UPDATE_ASSIGNEE: 'UPDATE_ASSIGNEE',
  UPDATE_CONVERSATION_CONTACT: 'UPDATE_CONVERSATION_CONTACT',

  SET_CURRENT_CHAT_WINDOW: 'SET_CURRENT_CHAT_WINDOW',
  CLEAR_CURRENT_CHAT_WINDOW: 'CLEAR_CURRENT_CHAT_WINDOW',
  CLEAR_ALL_MESSAGES: 'CLEAR_ALL_MESSAGES',
  RESOLVE_CONVERSATION: 'RESOLVE_CONVERSATION',
  ADD_CONVERSATION: 'ADD_CONVERSATION',
  UPDATE_CONVERSATION: 'UPDATE_CONVERSATION',
  MUTE_CONVERSATION: 'MUTE_CONVERSATION',
  UNMUTE_CONVERSATION: 'UNMUTE_CONVERSATION',
  ASSIGN_AGENT: 'ASSIGN_AGENT',
  ASSIGN_TEAM: 'ASSIGN_TEAM',
  SET_CHAT_META: 'SET_CHAT_META',
  ADD_MESSAGE: 'ADD_MESSAGE',
  ADD_PENDING_MESSAGE: 'ADD_PENDING_MESSAGE',
  MARK_MESSAGE_READ: 'MARK_MESSAGE_READ',
  SET_PREVIOUS_CONVERSATIONS: 'SET_PREVIOUS_CONVERSATIONS',
  SET_ACTIVE_INBOX: 'SET_ACTIVE_INBOX',

  SET_CONVERSATION_CAN_REPLY: 'SET_CONVERSATION_CAN_REPLY',

  // Inboxes
  SET_INBOXES_UI_FLAG: 'SET_INBOXES_UI_FLAG',
  SET_INBOXES: 'SET_INBOXES',
  SET_INBOX_ITEM: 'SET_INBOX_ITEM',
  ADD_INBOXES: 'ADD_INBOXES',
  EDIT_INBOXES: 'EDIT_INBOXES',
  DELETE_INBOXES: 'DELETE_INBOXES',

  // Agent
  SET_ACCOUNT_UI_FLAG: 'SET_ACCOUNT_UI_FLAG',
  SET_ACCOUNTS: 'SET_ACCOUNTS',
  ADD_ACCOUNT: 'ADD_ACCOUNT',
  EDIT_ACCOUNT: 'EDIT_ACCOUNT',
  DELETE_ACCOUNT: 'DELETE_AGENT',

  // Agent
  SET_AGENT_FETCHING_STATUS: 'SET_AGENT_FETCHING_STATUS',
  SET_AGENT_CREATING_STATUS: 'SET_AGENT_CREATING_STATUS',
  SET_AGENT_UPDATING_STATUS: 'SET_AGENT_UPDATING_STATUS',
  SET_AGENT_DELETING_STATUS: 'SET_AGENT_DELETING_STATUS',
  SET_AGENTS: 'SET_AGENTS',
  ADD_AGENT: 'ADD_AGENT',
  EDIT_AGENT: 'EDIT_AGENT',
  DELETE_AGENT: 'DELETE_AGENT',
  UPDATE_AGENTS_PRESENCE: 'UPDATE_AGENTS_PRESENCE',

  // Canned Response
  SET_CANNED_UI_FLAG: 'SET_CANNED_UI_FLAG',
  SET_CANNED: 'SET_CANNED',
  ADD_CANNED: 'ADD_CANNED',
  EDIT_CANNED: 'EDIT_CANNED',
  DELETE_CANNED: 'DELETE_CANNED',

  // Labels
  SET_LABEL_UI_FLAG: 'SET_LABEL_UI_FLAG',
  SET_LABELS: 'SET_LABELS',
  ADD_LABEL: 'ADD_LABEL',
  EDIT_LABEL: 'EDIT_LABEL',
  DELETE_LABEL: 'DELETE_LABEL',

  // Integrations
  SET_INTEGRATIONS_UI_FLAG: 'SET_INTEGRATIONS_UI_FLAG',
  SET_INTEGRATIONS: 'SET_INTEGRATIONS',
  ADD_INTEGRATION: 'ADD_INTEGRATION',
  DELETE_INTEGRATION: 'DELETE_INTEGRATION',
  ADD_INTEGRATION_HOOKS: 'ADD_INTEGRATION_HOOKS',
  DELETE_INTEGRATION_HOOKS: 'DELETE_INTEGRATION_HOOKS',

  // WebHook
  SET_WEBHOOK_UI_FLAG: 'SET_WEBHOOK_UI_FLAG',
  SET_WEBHOOK: 'SET_WEBHOOK',
  ADD_WEBHOOK: 'ADD_WEBHOOK',
  DELETE_WEBHOOK: 'DELETE_WEBHOOK',
  UPDATE_WEBHOOK: 'UPDATE_WEBHOOK',

  // Contacts
  SET_CONTACT_META: 'SET_CONTACT_META',
  SET_CONTACT_UI_FLAG: 'SET_CONTACT_UI_FLAG',
  SET_CONTACT_ITEM: 'SET_CONTACT_ITEM',
  SET_CONTACTS: 'SET_CONTACTS',
  CLEAR_CONTACTS: 'CLEAR_CONTACTS',
  EDIT_CONTACT: 'EDIT_CONTACT',
  UPDATE_CONTACTS_PRESENCE: 'UPDATE_CONTACTS_PRESENCE',

  // Notifications
  SET_NOTIFICATIONS_META: 'SET_NOTIFICATIONS_META',
  SET_NOTIFICATIONS_UNREAD_COUNT: 'SET_NOTIFICATIONS_UNREAD_COUNT',
  SET_NOTIFICATIONS_UI_FLAG: 'SET_NOTIFICATIONS_UI_FLAG',
  UPDATE_NOTIFICATION: 'UPDATE_NOTIFICATION',
  UPDATE_ALL_NOTIFICATIONS: 'UPDATE_ALL_NOTIFICATIONS',
  SET_NOTIFICATIONS_ITEM: 'SET_NOTIFICATIONS_ITEM',
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS',
  CLEAR_NOTIFICATIONS: 'CLEAR_NOTIFICATIONS',
  EDIT_NOTIFICATIONS: 'EDIT_NOTIFICATIONS',
  UPDATE_NOTIFICATIONS_PRESENCE: 'UPDATE_NOTIFICATIONS_PRESENCE',

  // Contact Conversation
  SET_CONTACT_CONVERSATIONS_UI_FLAG: 'SET_CONTACT_CONVERSATIONS_UI_FLAG',
  SET_CONTACT_CONVERSATIONS: 'SET_CONTACT_CONVERSATIONS',
  ADD_CONTACT_CONVERSATION: 'ADD_CONTACT_CONVERSATION',

  // Contact Label
  SET_CONTACT_LABELS_UI_FLAG: 'SET_CONTACT_LABELS_UI_FLAG',
  SET_CONTACT_LABELS: 'SET_CONTACT_LABELS',

  // Conversation Label
  SET_CONVERSATION_LABELS_UI_FLAG: 'SET_CONVERSATION_LABELS_UI_FLAG',
  SET_CONVERSATION_LABELS: 'SET_CONVERSATION_LABELS',
  SET_BULK_CONVERSATION_LABELS: 'SET_BULK_CONVERSATION_LABELS',

  // Reports
  SET_ACCOUNT_REPORTS: 'SET_ACCOUNT_REPORTS',
  SET_ACCOUNT_SUMMARY: 'SET_ACCOUNT_SUMMARY',
  TOGGLE_ACCOUNT_REPORT_LOADING: 'TOGGLE_ACCOUNT_REPORT_LOADING',

  // Conversation Metadata
  SET_CONVERSATION_METADATA: 'SET_CONVERSATION_METADATA',

  // Conversation Page
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_CONVERSATION_END_REACHED: 'SET_CONVERSATION_END_REACHED',
  CLEAR_CONVERSATION_PAGE: 'CLEAR_CONVERSATION_PAGE',

  // Notification Settings
  SET_USER_NOTIFICATION_UI_FLAG: 'SET_USER_NOTIFICATION_UI_FLAG',
  SET_USER_NOTIFICATION: 'SET_USER_NOTIFICATION',

  // User Typing
  ADD_USER_TYPING_TO_CONVERSATION: 'ADD_USER_TYPING_TO_CONVERSATION',
  REMOVE_USER_TYPING_FROM_CONVERSATION: 'REMOVE_USER_TYPING_FROM_CONVERSATION',

  // Conversation Search
  SEARCH_CONVERSATIONS_SET: 'SEARCH_CONVERSATIONS_SET',
  SEARCH_CONVERSATIONS_SET_UI_FLAG: 'SEARCH_CONVERSATIONS_SET_UI_FLAG',

  // Campaigns
  SET_CAMPAIGN_UI_FLAG: 'SET_CAMPAIGN_UI_FLAG',
  SET_CAMPAIGNS: 'SET_CAMPAIGNS',
  ADD_CAMPAIGN: 'ADD_CAMPAIGN',
  EDIT_CAMPAIGN: 'EDIT_CAMPAIGN',

  // Contact notes
  SET_CONTACT_NOTES_UI_FLAG: 'SET_CONTACT_NOTES_UI_FLAG',
  SET_CONTACT_NOTES: 'SET_CONTACT_NOTES',
  ADD_CONTACT_NOTE: 'ADD_CONTACT_NOTE',
  EDIT_CONTACT_NOTE: 'EDIT_CONTACT_NOTE',
  DELETE_CONTACT_NOTE: 'DELETE_CONTACT_NOTE',
};
