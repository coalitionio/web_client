import { Link  } from 'react-router-dom';

// material-ui
import { Text} from '@medusajs/ui';

const Footer = () => (
  <div className='flex justify-between items-center p-[24px 16px 0px] '  >
    <Text size="base">&copy; All rights reserved</Text>
    <div className='flex space-x-6 items-center justify-between' >
      <Link  to="#" target="_blank" color="textPrimary">
        About us
      </Link>
      <Link  to="#" target="_blank" color="textPrimary">
        Privacy
      </Link>
      <Link  to="#" target="_blank" color="textPrimary">
        Terms
      </Link>
    </div>
  </div>
);

export default Footer;
