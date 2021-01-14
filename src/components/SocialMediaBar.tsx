import Icon from 'assets/icons';
import { Facebook } from 'assets/socialMediaIcons';

export default function SocialMediaBar() {
  return (
    <div className="flex justify-center items-center svg:m-4">
      <Icon name="facebook" className="mr-3" />
      <Icon name="twitter" className="mx-3" />
      <Icon name="github" className="mx-3" />
      <Icon name="linked-in" className="ml-3" />
    </div>
  );
}
