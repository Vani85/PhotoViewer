import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import App from './App';
import renderer from 'react-test-renderer';

test('React Photo Viewer', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/React Photo Viewer/i);
    expect(textElement).toBeVisible();
});

test('Broken images are not picked by the imageUrl generation', () => {
    render(<App />);
    const imageElement = document.getElementById("image0");
    expect(imageElement?.getAttribute("src")).toMatch("https://picsum.photos/id/600/1600/900.jpg");
});


it("Should match with the app snapshot", () => {
    const tree = renderer.create(<App/>).toJSON();
    expect(tree).toMatchSnapshot();
});


test('When an image is selected it should be highlighted with the red border', async ()=> {
    render(<App />);  
    const imageElement = document.getElementById( "image5");
    await userEvent.click(imageElement!);
    const className = imageElement!.getAttribute("class");
    expect(className).toMatch(/selected/);
});
 

test('When an image is selected the image viewer should be updated with new image', async ()=> {
    render(<App />);  
    await userEvent.click(document.getElementById( "image5")!);
    const srcUrl = document.getElementsByClassName("thumbnailImage")[0].getAttribute("src")
    expect(srcUrl).toMatch("https://picsum.photos/id/606/1600/900.jpg");
});