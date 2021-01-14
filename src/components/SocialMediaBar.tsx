import Icon from 'assets/icons';
import { Facebook } from 'assets/socialMediaIcons';

export default function SocialMediaBar() {
  return (
    <div className="flex justify-center items-center svg:m-4">
      <Icon name="facebook" className="mr-3" width="2.5rem" />
      <Icon name="twitter" className="mx-3" width="2.5rem" />
      <Icon name="github" className="mx-3" width="2.5rem" />
      <Icon name="linked-in" className="ml-3" width="2.5rem" />
    </div>
  );
}
