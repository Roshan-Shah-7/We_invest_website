import React from 'react';
import { Document, Page, Text, View, StyleSheet, renderToBuffer } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
  },
  dataText: {
    fontSize: 12,
    marginBottom: 5,
  },
  recordContainer: {
    marginBottom: 15,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    borderBottomStyle: 'solid',
  },
  recordHeader: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

// Create Document Component
const MyDocument = ({ formType, data }: { formType: string; data: Record<string, unknown> | Record<string, unknown>[] }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>{formType.toUpperCase()} Report</Text>
        {Array.isArray(data) ? (
          data.map((record, index) => (
            <View key={record._id as string || index} style={styles.recordContainer}> {/* Use _id as key if available */}
              <Text style={styles.recordHeader}>Record {index + 1}</Text>
              {Object.entries(record).map(([key, value]) => {
                if (key === '_id') { // Filter out _id
                  return null;
                }
                let displayValue = value;
                if (typeof value === 'object' && value !== null) {
                  if (Array.isArray(value)) {
                    displayValue = value.join(', ');
                  } else {
                    displayValue = JSON.stringify(value, null, 2);
                  }
                }
                return (
                  <Text key={key} style={styles.dataText}>{`${key}: ${displayValue}`}</Text>
                );
              })}
            </View>
          ))
        ) : (
          Object.entries(data).map(([key, value]) => {
            if (key === '_id') { // Filter out _id for single record too
              return null;
            }
            let displayValue = value;
            if (typeof value === 'object' && value !== null) {
              if (Array.isArray(value)) {
                displayValue = value.join(', ');
              } else {
                displayValue = JSON.stringify(value, null, 2);
              }
            }
            return (
              <Text key={key} style={styles.dataText}>{`${key}: ${displayValue}`}</Text>
            );
          })
        )}
      </View>
    </Page>
  </Document>
);

export async function generatePdf(formType: string, data: Record<string, unknown>): Promise<Buffer> {
  return renderToBuffer(<MyDocument formType={formType} data={data} />);
}
