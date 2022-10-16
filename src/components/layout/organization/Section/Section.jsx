import React, {useEffect} from 'react';
import Form from '@components/forms/Form/FormEjerciciosJs'

const Section = (props) => {
    return(
        <section>
            <div className="text-center mt-5 pt-5">
                <h3>{props.data.title}</h3>
                <Form index={props.data.id}/>
            </div>  
        </section>
    )

}
export default Section;