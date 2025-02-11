import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';
import { DisplayMainPhoto} from './Thumbnail/Thumbnail';

test('React Photo Viewer', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeVisible();
});

test('Broken images are not picked by the imageUrl generation', () => {
    render(<App />);
    const testID = document.getElementById("image0");
    expect(testID?.getAttribute("src")).toMatch("https://picsum.photos/id/600/1600/900.jpg");
});

test('Should match with the entire App', ()=> {
    const tree = render(<App />);
    expect(tree).toMatchSnapshot();
});

test('Should match with the Large image', ()=> {
  const tree = render(<DisplayMainPhoto src={"https://th.bing.com/th/id/OIP.Qcy1dh_eWTUTzZ7i8Ge34gHaEK?rs=1&pid=ImgDetMain"} />);;
  expect(tree).toMatchSnapshot();
});

test('When an image is selected the snapshot should match with the red border snapshot', async ()=> {
  const tree = render(<App />);  
  //expect(tree).toMatchSnapshot();
  await userEvent.click(document.getElementById( "image5")!);
  expect(tree).toMatchSnapshot();
});
 

test('When an image is selected the image viewer should be updated with new image', async ()=> {
  render(<App />);  
  await userEvent.click(document.getElementById( "image5")!);
  const srcUrl = document.getElementsByClassName("thumbnailImage")[0].getAttribute("src")
  expect(srcUrl).toMatch("https://picsum.photos/id/606/1600/900.jpg");
});


  

