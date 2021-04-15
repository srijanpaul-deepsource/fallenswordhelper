import addChatTextArea from './addChatTextArea';
import addLogColoring from './addLogColoring';
import getUrlParameter from '../system/getUrlParameter';
import guildChatStyling from './guildChatStyling';

export default function guildChat() {
  guildChatStyling();
  if (!getUrlParameter('chat_type')) {
    addChatTextArea();
    addLogColoring('Chat', 0, 3);
  } else {
    addLogColoring('Leader', 0, 3);
  }
}
