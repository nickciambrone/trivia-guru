import Accordion from 'react-bootstrap/Accordion';
import './accordian.styles.scss';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import IconPlayCircle from '../icons/play';
import categories from './categories'
import IconPumpkin from '../icons/pumpkin';

function CategoryAccordian(props) {

  const selectCategory = (cat) => {
    props.setCategory(cat);
    props.showModal();
  }

  return (
    <Accordion >
      {Object.keys(categories).map((ele, ind) => {
        return (
          <Accordion.Item eventKey={ind.toString()}>
            <Accordion.Header>{ele}</Accordion.Header>
            <Accordion.Body>

              <ul style={{ listStyleType: 'none', width: '100%', padding: '0px' }}>
              <li><Button variant="light" style={{ width: '100%' }} onClick={() => selectCategory('All ' + ele)}>{'All '+ele}</Button></li>

              {categories[ele].map((elem, ind) => {
                return (
                  <li><Button variant="light" style={{ width: '100%' }} onClick={() => selectCategory(elem)}>{elem == 'Halloween' ? <IconPumpkin/> : ''} {elem} {elem == 'Halloween' ? <IconPumpkin/> : ''}</Button></li>

                )
              })}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        )
      })}

      <Accordion.Item eventKey="5">
        <Card bg='primary' style={{ color: 'white', cursor: 'pointer', fontWeight: '500', marginTop:'8px' }} onClick={() => selectCategory('General')}><Card.Header>
          General (All Categories) {<IconPlayCircle />}

        </Card.Header></Card>

      </Accordion.Item>
    </Accordion>
  );
}

export default CategoryAccordian;