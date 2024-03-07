"use client";
import React from "react";
import styles from "@/app/page.module.css";
import usePage from "./usePage";
import {Button, Checkbox, Form, type FormProps, Input} from 'antd';
import Image from 'next/image';
import logo from "../../public/login_logo.png";
type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};
const Page = () => {
    const {onFinish, onFinishFailed} = usePage();
    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <ul className={styles.items}>
                    <li className={styles.item}>Tizim haqida</li>
                    <li className={styles.item}>Aloqa</li>
                </ul>
            </div>
            <main className={styles.main}>
                <div className={styles.imgContent} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Image
                        src={logo}
                        sizes="70vw"
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                        alt="Picture of the author"
                    />
                </div>
                <div className={styles.form}>
                    <div className={styles.formContent}>
                        <h2 style={{textAlign: 'center'}}>Tizimga kirish</h2>
                        <Form
                            name="basic"
                            wrapperCol={{span: 24}}
                            initialValues={{remember: true}}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item<FieldType>
                                name="username"
                                // wrapperCol={{span: 24}}
                                rules={[{required: true, message: 'Please input your username!'}]}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item<FieldType>
                                name="password"
                                // wrapperCol={{span: 24}}
                                rules={[{required: true, message: 'Please input your password!'}]}
                            >
                                <Input.Password/>
                            </Form.Item>

                            <Form.Item<FieldType>
                                name="remember"
                                valuePropName="checked"
                                // wrapperCol={{span: 24}}
                            >
                                <Checkbox>Eslab qolish</Checkbox>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" style={{width: '100%'}}>
                                    Kirish
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Page;