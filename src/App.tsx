import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

import { PersonalDashboard } from "./features/personal/PersonalDashboard";
import { CareerDashboard } from "./features/career/CareerDashboard";
import { FinanceDashboard } from "./features/finance/FinanceDashboard";
import { LearningDashboard } from "./features/learning/LearningDashboard";
import { DevelopmentDashboard } from "./features/development/DevelopmentDashboard";
import { LifestyleDashboard } from "./features/lifestyle/LifestyleDashboard";
import { SystemsDashboard } from "./features/systems/SystemsDashboard";
import { SocialDashboard } from "./features/social/SocialDashboard";
import { BusinessDashboard } from "./features/business/BusinessDashboard";
import { MainDashboard } from "./features/dashboard/MainDashboard";
import { TodoDashboard } from "./features/todo/TodoDashboard";
import { HealthDashboard } from "./features/health/HealthDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainDashboard />} />
          <Route path="/todo" element={<TodoDashboard />} />
          <Route path="/personal" element={<PersonalDashboard />} />
          <Route path="/health" element={<HealthDashboard />} />
          <Route path="/career" element={<CareerDashboard />} />
          <Route path="/finance" element={<FinanceDashboard />} />
          <Route path="/learning" element={<LearningDashboard />} />
          <Route path="/development" element={<DevelopmentDashboard />} />
          <Route path="/lifestyle" element={<LifestyleDashboard />} />
          <Route path="/systems" element={<SystemsDashboard />} />
          <Route path="/social" element={<SocialDashboard />} />
          <Route path="/business" element={<BusinessDashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
