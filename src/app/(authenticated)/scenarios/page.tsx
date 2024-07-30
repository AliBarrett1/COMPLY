'use client'

import { useState, useEffect } from 'react'
import { Upload, Button, Select, Typography, Row, Col, Card, Spin } from 'antd'
import {
  UploadOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  InfoCircleOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
const { Option } = Select
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ScenariosPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: upload } = useUploadPublic()
  const { mutateAsync: createLogFile } = Api.logFile.create.useMutation()
  const { data: logFiles, isLoading: isLoadingLogFiles } =
    Api.logFile.findMany.useQuery({
      where: { userId: user?.id },
      include: {
        analysisResults: { include: { requirement: true } },
        complianceSummarys: true,
      },
    })

  const [selectedFramework, setSelectedFramework] = useState<
    string | undefined
  >(undefined)
  const [uploadedFileUrl, setUploadedFileUrl] = useState<string | undefined>(
    undefined,
  )
  const [isProcessing, setIsProcessing] = useState(false)

  const handleUpload = async (file: File) => {
    try {
      const { url } = await upload({ file })
      setUploadedFileUrl(url)
      enqueueSnackbar('File uploaded successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to upload file', { variant: 'error' })
    }
  }

  const handleProcessFile = async () => {
    if (!uploadedFileUrl || !selectedFramework) {
      enqueueSnackbar('Please upload a file and select a framework', {
        variant: 'error',
      })
      return
    }

    setIsProcessing(true)
    try {
      const logFile = await createLogFile({
        data: {
          filePathUrl: uploadedFileUrl,
          uploadDate: dayjs().toISOString(),
          complianceFramework: selectedFramework,
          userId: user?.id,
        },
      })

      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000))

      enqueueSnackbar('File processed successfully', { variant: 'success' })
      router.push('/analysis-results')
    } catch (error) {
      enqueueSnackbar('Failed to process file', { variant: 'error' })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ marginBottom: '20px' }}>
        <Col>
          <Title level={2}>Compliance Log File Analysis</Title>
          <Paragraph>
            Upload a log file and select a compliance framework to get started.
          </Paragraph>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24} md={12}>
          <Card>
            <Upload beforeUpload={handleUpload} showUploadList={false}>
              <Button icon={<UploadOutlined />}>Upload Log File</Button>
            </Upload>
            <Select
              placeholder="Select Compliance Framework"
              style={{ width: '100%', marginTop: '10px' }}
              onChange={setSelectedFramework}
            >
              <Option value="framework1">Framework 1</Option>
              <Option value="framework2">Framework 2</Option>
              <Option value="framework3">Framework 3</Option>
            </Select>
            <Button
              type="primary"
              style={{ width: '100%', marginTop: '10px' }}
              onClick={handleProcessFile}
              loading={isProcessing}
            >
              Process File
            </Button>
          </Card>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24} md={12}>
          <Card title="Compliance Summary" loading={isLoadingLogFiles}>
            {logFiles?.map(logFile => (
              <div key={logFile.id}>
                <Title level={4}>{logFile.complianceFramework}</Title>
                <Text>
                  Total Requirements:{' '}
                  {logFile.complianceSummarys?.[0]?.totalRequirements.toString()}
                </Text>
                <br />
                <Text>
                  Met:{' '}
                  {logFile.complianceSummarys?.[0]?.metRequirements.toString()}
                </Text>
                <br />
                <Text>
                  Not Met:{' '}
                  {logFile.complianceSummarys?.[0]?.notMetRequirements.toString()}
                </Text>
                <br />
                <Text>
                  Partially Met:{' '}
                  {logFile.complianceSummarys?.[0]?.partiallyMetRequirements.toString()}
                </Text>
                <br />
              </div>
            ))}
          </Card>
        </Col>
      </Row>
      <Row justify="center" gutter={[16, 16]}>
        <Col span={24} md={12}>
          <Card title="Detailed Report" loading={isLoadingLogFiles}>
            {logFiles?.map(logFile => (
              <div key={logFile.id}>
                {logFile.analysisResults?.map(result => (
                  <div key={result.id}>
                    <Title level={5}>{result.requirement?.description}</Title>
                    <Text>Status: {result.status}</Text>
                    <br />
                    <Text>Relevant Info: {result.relevantInfo}</Text>
                    <br />
                    <Text>Identified Issues: {result.identifiedIssues}</Text>
                    <br />
                    <Text>
                      Suggested Improvements: {result.suggestedImprovements}
                    </Text>
                    <br />
                  </div>
                ))}
              </div>
            ))}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
