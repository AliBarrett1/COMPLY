'use client'

import { Prisma } from '@prisma/client'
import { Typography, Button, Spin, Row, Col } from 'antd'
import { FileTextOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem/layouts/Page.layout'

export default function ReportPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const {
    data: reports,
    isLoading,
    refetch,
  } = Api.report.findMany.useQuery({
    where: { userId: user?.id },
    include: { logFile: true },
  })

  const { mutateAsync: createReport } = Api.report.create.useMutation()

  const handleGenerateReport = async () => {
    try {
      const newReport = await createReport({
        data: {
          generatedDate: new Date().toISOString(),
          content: 'Detailed analysis of compliance...',
          userId: user?.id,
          logFileId: 'some-log-file-id', // Replace with actual log file ID
        },
      })
      enqueueSnackbar('Report generated successfully!', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('Failed to generate report.', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ textAlign: 'center', padding: '20px' }}>
        <Col span={24}>
          <Title level={2}>Generate Compliance Report</Title>
          <Paragraph>
            As a user, you can generate a detailed report of the findings so
            that you can have a documented analysis of compliance.
          </Paragraph>
          <Button
            type="primary"
            icon={<FileTextOutlined />}
            onClick={handleGenerateReport}
          >
            Generate Report
          </Button>
        </Col>
      </Row>
      <Row justify="center" style={{ padding: '20px' }}>
        <Col span={24}>
          <Title level={3}>Generated Reports</Title>
          {isLoading ? (
            <Spin size="large" />
          ) : (
            reports?.map(report => (
              <div key={report.id} style={{ marginBottom: '20px' }}>
                <Title level={4}>
                  {dayjs(report.generatedDate).format('MMMM D, YYYY')}
                </Title>
                <Text>{report.content}</Text>
                <Paragraph>
                  Associated Log File: {report.logFile?.filePathUrl}
                </Paragraph>
              </div>
            ))
          )}
        </Col>
      </Row>
    </PageLayout>
  )
}
