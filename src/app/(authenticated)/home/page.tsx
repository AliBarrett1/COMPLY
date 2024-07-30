'use client'

import { useUserContext } from '@/core/context'
import { useUploadPublic } from '@/core/hooks/upload'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'
import { UploadOutlined } from '@ant-design/icons'
import { Prisma } from '@prisma/client'
import { Button, Col, Form, Row, Select, Spin, Typography, Upload } from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
const { Title, Text } = Typography
const { Option } = Select

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: createLogFile } = Api.logFile.create.useMutation()

  const [file, setFile] = useState<File | null>(null)
  const [complianceFramework, setComplianceFramework] =
    useState<string>('ISO27001')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleFileChange = (info: any) => {
    if (info.file.status === 'done') {
      setFile(info.file.originFileObj)
    }
  }

  const handleFrameworkChange = (value: string) => {
    setComplianceFramework(value)
  }

  const handleSubmit = async () => {
    if (!file) {
      enqueueSnackbar('Please upload a file', { variant: 'error' })
      return
    }

    setIsLoading(true)
    try {
      const { url } = await upload({ file })
      const newLogFile: Prisma.LogFileCreateInput = {
        filePathUrl: url,
        uploadDate: dayjs().toISOString(),
        complianceFramework,
        user: { connect: { id: user.id } },
      }
      await createLogFile({ data: newLogFile })
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
      router.push('/analysis-results')
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
        <Col xs={24} sm={20} md={16} lg={12} xl={8}>
          <Title level={2}>Upload Log Files for Compliance Analysis</Title>
          <Text>
            Upload your log files and select the compliance framework for
            analysis.
          </Text>
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item label="Upload Log File" required>
              <Upload
                name="logFile"
                beforeUpload={() => false}
                onChange={handleFileChange}
                accept=".log, .txt"
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
            <Form.Item label="Select Compliance Framework" required>
              <Select defaultValue="ISO27001" onChange={handleFrameworkChange}>
                <Option value="ISO27001">ISO27001</Option>
                <Option value="PCI DSS">PCI DSS</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" disabled={isLoading}>
                {isLoading ? <Spin /> : 'Submit'}
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </PageLayout>
  )
}
