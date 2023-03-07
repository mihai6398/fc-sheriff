import React, {useState} from 'react';
interface roadMapAcordeonItemProps {
    title: string;
    description: string;
}

const RoadMapAcordeonItem = ({title, description}: roadMapAcordeonItemProps) => {

    const [accordion, setAccordion] = useState<boolean>(false);

        return (
        <div>
            <div className={'py-4'} onClick={() => setAccordion(!accordion)}>
            <span className={' w-100 d-inline-flex'}>
                <button className={`border border-0 bg bg-transparent accordion`}>
                        <img style={{paddingBottom: '5px'}} src={accordion ? 'assets/icon/plus.png' : 'assets/icon/minus.png'} alt=""/>
                </button>
                <span>
                    <h5>{title}</h5>
                </span>
            </span>
                <div className={accordion ? 'accordion-content active-accordion' : 'accordion-content'}>
                    <div className={'accordion-text'}
                         dangerouslySetInnerHTML={{ __html: description}}
                    />
                </div>
            </div>
        </div>
    );
};

export default RoadMapAcordeonItem;