import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import { Description } from './components/Description';
import { Name } from './components/Name';
import { Price } from './components/Price';
import product from './product';
import Button from 'react-bootstrap/Button';


function CardApp() {
return (
    <Stack direction="horizontal" gap={3}>
        <div className="p-2">
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Header><Price/></Card.Header>
      <Card.Body>
        <Card.Title><Name/></Card.Title>
        <Card.Text>
          <Description/>
        </Card.Text>
        <Button variant="primary">Achetez</Button>
      </Card.Body>
    </Card>
        </div>

        
                </Stack>
    );
}

export default CardApp;