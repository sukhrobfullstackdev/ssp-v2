import {type FormProps} from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const usePage = () => {
    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return {onFinish, onFinishFailed};
};

export default usePage;