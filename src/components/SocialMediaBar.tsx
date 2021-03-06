import Icon from 'assets/icons';

export default function SocialMediaBar() {
  return (
    <div className="flex items-center justify-center svg:m-4">
      <Icon name="facebook" className="mr-3" width="2.5rem" />
      <Icon name="twitter" className="mx-3" width="2.5rem" />
      <Icon name="github" className="mx-3" width="2.5rem" />
      <Icon name="linked-in" className="ml-3" width="2.5rem" />
    </div>
  );
}
