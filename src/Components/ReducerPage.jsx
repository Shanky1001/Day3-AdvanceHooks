import { Button, Card, Checkbox, DescriptionList, FormLayout, Layout, Modal, Page, RadioButton, Stack, TextContainer, TextField } from '@shopify/polaris'
import React, { useReducer, useState } from 'react'
import { actions } from '../Actions';
import { FormReducer } from '../Reducer';

const ReducerPage = () => {

    const [active, setActive] = useState(false);

    const [formValue] = useState({
        title: '', desc: '', handleTime: '', amazonSKU: '', barcode: false, amazonCategory: '', imageSelect: ''
    })

    const [form, dispatch] = useReducer(FormReducer, formValue)

    return (
        <Page fullWidth>
            {/* Form starts -----> */}
            <Layout>
                <Layout.AnnotatedSection id="Title" title="Title"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField value={form.title} onChange={(e) => dispatch({
                                type: actions.CHANGE_TITLE, payload: e
                            })}
                                autoComplete="off" />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="Description" title="Description"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField value={form.desc} onChange={(e) => dispatch({
                                type: actions.CHANGE_DESC, payload: e
                            })}
                                autoComplete="off" />

                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="handleTime" title="Handling Time"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField value={form.handleTime} onChange={(e) => dispatch({
                                type: actions.CHANGE_TIME, payload: e
                            })}
                                autoComplete="off" />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="amazonSKU" title="Amazon Parent SKU"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField type='number' value={form.amazonSKU} onChange={(e) => dispatch({
                                type: actions.CHANGE_SKU, payload: e
                            })}
                                autoComplete="off" />

                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="barcodeExemption" title="Barcode/GTIN Exemption"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <Checkbox label="Barcode/GTIN Exemption" checked={form.barcode}
                                onChange={(e) => dispatch({
                                    type: actions.CHANGE_BARCODE
                                })}
                            />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="addAmazonCategory" title="Add Amazon Category"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField value={form.amazonCategory} onChange={(e) => dispatch({
                                type: actions.CHANGE_AMA_CAT, payload: e
                            })}
                                autoComplete="off" />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="imageSelection" title="Image Selection"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <Stack vertical>
                                <RadioButton
                                    label="Set product image similar to shopify"
                                    name="image"
                                    id='shopify'
                                    checked={'shopify' === form.imageSelect && true}
                                    onChange={(e) => dispatch({
                                        type: actions.CHANGE_IAMGE, payload: 'shopify'
                                    })}
                                />
                                <RadioButton
                                    label="set custome Amazon images"
                                    name="image"
                                    id='amazon'
                                    checked={'amazon' === form.imageSelect && true}
                                    onChange={(e) => dispatch({
                                        type: actions.CHANGE_IAMGE, payload: 'amazon'
                                    })}
                                />
                            </Stack>
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>
            
            {/* Form Ends -----> */}

            <div style={{ margin: "2rem 0", float: "right" }}> <Button primary onClick={() => { setActive(true) }} >Add product</Button></div>

            {/* Modal For From data display */}
            <Modal open={active} onClose={() => setActive(false)}
                title="Details Submited through form">
                <Modal.Section>
                    <TextContainer>
                        <DescriptionList
                            items={[
                                {
                                    term: 'Title',
                                    description:
                                        form.title,
                                },
                                {
                                    term: 'Description',
                                    description:
                                        form.desc
                                },
                                {
                                    term: 'Handling Time',
                                    description:
                                        form.handleTime,
                                },
                                {
                                    term: 'Amazon Parent SKU',
                                    description:
                                        form.amazonSKU,
                                },
                                {
                                    term: 'Barcode/GTIN Exemption',
                                    description:
                                        form.barcode.toString(),
                                },
                                {
                                    term: 'Add Amazon Category',
                                    description:
                                        form.amazonCategory,
                                },
                                {
                                    term: 'Image Selection',
                                    description:
                                        form.imageSelect,
                                },
                            ]}
                        />
                    </TextContainer>
                </Modal.Section>
            </Modal>

        </Page>
    )
}

export default ReducerPage