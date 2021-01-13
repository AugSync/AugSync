import Button from 'components/Button';

export default function Header() {
  return (
    <div className="bg-green-dark">
      <div className="container px-4 flex">
        <Button icon="home" isActive title="Home" />
        <Button icon="document" title="Blog" />
        <Button icon="folder" title="Portfolio" />
        <Button icon="mail" title="Contact" />
      </div>
    </div>
  );
}
