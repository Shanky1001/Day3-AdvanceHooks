import { Button, Card, Checkbox, FormLayout, Layout, Modal, Page, RadioButton, Stack, TextContainer, TextField } from '@shopify/polaris'
import React, { useState } from 'react'

const ReducerPage = () => {

    const [active, setActive] = useState(false)

    return (
        <Page fullWidth>
            <Layout>
                <Layout.AnnotatedSection id="Title" title="Title"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField onChange={() => { }}
                                autoComplete="off" />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="Description" title="Description"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField onChange={() => { }}
                                autoComplete="off" />

                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="handleTime" title="Handling Time"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField onChange={() => { }}
                                autoComplete="off" />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="amazonSKU" title="Amazon Parent SKU"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField type='number' onChange={() => { }}
                                autoComplete="off" />

                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="barcodeExemption" title="Barcode/GTIN Exemption"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <Checkbox
                                label="Barcode/GTIN Exemption"
                                checked={''}
                                onChange={'handleChange'}
                            />
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
                <Layout.AnnotatedSection id="addAmazonCategory" title="Add Amazon Category"
                    description="Shopify and your customers will use this information to contact you." >
                    <Card sectioned>
                        <FormLayout>
                            <TextField onChange={() => { }}
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
                                    onChange={''}
                                />
                                <RadioButton
                                    label="set custome Amazon images"

                                    name="image"
                                    onChange={''}
                                />
                            </Stack>
                        </FormLayout>
                    </Card>
                </Layout.AnnotatedSection>
            </Layout>

            <div style={{ margin: "2rem 0", float: "right" }}> <Button primary onClick={() => {setActive(true) }} >Add product</Button></div>

                <Modal open={active} onClose={() => setActive(false)}
                    title="Details Submited through form">
                    <Modal.Section>
                        <TextContainer>
                            <p>
                                Use Instagram posts to share your products with millions of
                                people. Let shoppers buy from your store without leaving
                                Instagram.
                            </p>
                        </TextContainer>
                    </Modal.Section>
                </Modal>
       
        </Page>
    )
}

export default ReducerPage