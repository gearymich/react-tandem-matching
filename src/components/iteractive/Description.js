import Button from './Button';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => ( 
    <Popup trigger={<Button color='#F397AF' text="Beschreibung"/> } modal nested> 
        {close => ( 
        <div style={{background: '#009892',color: 'white', 
            padding: "10px 20px", display: 'flex', flexDirection: 'column'}}> 

            <div style={{padding: "5px 5px 0px 5px", fontWeight: 'bold'}}> 
                TEMPORARY CONTENT 
            </div> 
            <div style={{padding: "5px 5px"}}> 
                {' '} 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Atque, a nostrum. Dolorem, repellat quidem ut, minima 
                sint vel eveniet quibusdam voluptates delectus doloremque, 
                explicabo tempore dicta adipisci fugit amet dignissimos? 
                <br /> Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit. Consequatur sit commodi beatae optio voluptatum sed 
                eius cumque, delectus saepe repudiandae explicabo nemo nam 
                libero ad, doloribus, voluptas rem alias. Vitae? 
            </div> 
            <div style={{alignSelf: 'flex-end'}}> 
                <Button color='#F397AF' text="close modal" onClick={() => {
                    console.log('modal closed '); 
                    close(); 
                }}/>
            </div> 
    </div> 
    )} 
</Popup>
); 