import whatsAppImg from '../../assets/images/whatsapp-clone-ui.png'
import financialTrackerImg from '../../assets/images/financial-tracker-ui.png';

interface ImageMapping {
  [key: string]: string;
}

const imageMapping: ImageMapping = {
  WhatsApp: whatsAppImg,
  FinancialTracker: financialTrackerImg,
};

export default imageMapping;
