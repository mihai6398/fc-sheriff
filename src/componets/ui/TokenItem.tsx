interface tokenItemProps {
    paragraph: string
}

const TokenItem = ({paragraph} : tokenItemProps) => {
    return (
        <div className={'mb-3 '}>
            <img className={'d-none d-sm-inline-block me-3'}
                 src="https://i.ibb.co/qN4wpWj/Group-10.png" alt=""/>
            <p className={'d-inline-flex text-white pl-3'}>{paragraph}</p>
        </div>
    );
};

export default TokenItem;