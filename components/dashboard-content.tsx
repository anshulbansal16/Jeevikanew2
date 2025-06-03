import type React from "react"
import { Box, Typography, Grid } from "@mui/material"
// import EmergencyAlertWidget from './EmergencyAlertWidget'; // Removed import

const DashboardContent: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ p: 2, bgcolor: "primary.light", color: "white", borderRadius: 1 }}>
            <Typography variant="h6">Total Users</Typography>
            <Typography variant="subtitle1">1,234</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ p: 2, bgcolor: "secondary.light", color: "white", borderRadius: 1 }}>
            <Typography variant="h6">Active Users</Typography>
            <Typography variant="subtitle1">789</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Box sx={{ p: 2, bgcolor: "success.light", color: "white", borderRadius: 1 }}>
            <Typography variant="h6">New Signups</Typography>
            <Typography variant="subtitle1">123</Typography>
          </Box>
        </Grid>
        {/* Removed EmergencyAlertWidget */}
      </Grid>
    </Box>
  )
}

export default DashboardContent
