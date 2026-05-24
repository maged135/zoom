"use client";

import { useAppSelector } from "@/lib/redux/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AuthGuard from "@/components/auth-guard";

export default function AdminDashboard() {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <AuthGuard allowedRoles={["SUPER_ADMIN"]}>
      <h1 className="text-3xl font-bold text-slate-900 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
            <CardDescription>All platform users</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">2,543</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>Total income</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">$45.2K</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
            <CardDescription>Currently online</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">1,234</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Admin Information</CardTitle>
          <CardDescription>Your account details</CardDescription>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <dt className="text-sm font-medium text-slate-600">Full Name</dt>
              <dd className="text-lg font-semibold text-slate-900">
                {user?.fullName}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-600">Email</dt>
              <dd className="text-lg font-semibold text-slate-900">
                {user?.email}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-600">User ID</dt>
              <dd className="text-lg font-semibold text-slate-900">
                {user?.id}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-slate-600">User Type</dt>
              <dd className="text-lg font-semibold text-blue-600">
                {user?.userType}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </AuthGuard>
  );
}
