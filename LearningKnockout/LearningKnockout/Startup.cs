using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(LearningKnockout.Startup))]
namespace LearningKnockout
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
